import { DataTypes, Model } from 'sequelize';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../db.js';

const SALT_ROUNDS = 5;

class User extends Model {
  static async authenticate({ username, password }) {
    const user = await this.findOne({ where: { username } });
    if (!user || !(await user.correctPassword(password))) {
      const error = Error('Incorrect username/password');
      error.status = 401;
      throw error;
    }
    return user.generateToken();
  }

  static async findByToken(token) {
    try {
      const { id } = await jwt.verify(token, process.env.JWT);
      const user = await User.findByPk(id);
      if (!user) {
        throw 'nooo';
      }
      return user;
    } catch (ex) {
      const error = Error('bad token');
      error.status = 401;
      throw error;
    }
  }

  correctPassword(candidatePwd) {
    return bcrypt.compare(candidatePwd, this.password);
  }

  generateToken() {
    return jwt.sign({ id: this.id }, process.env.JWT);
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'user',
  }
);

const hashPassword = async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

export default User;