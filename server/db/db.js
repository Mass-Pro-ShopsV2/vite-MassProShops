import { Sequelize } from 'sequelize';
import pkg from '../../package.json' assert { type: "json" };

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const config = {
  logging: false
};

if (process.env.LOGGING === 'true') {
  delete config.logging;
}

if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);

export default db;
