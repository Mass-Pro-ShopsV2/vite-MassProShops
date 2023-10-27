import { Sequelize } from 'sequelize';
import pkg from '../../package.json' assert { type: "json" };
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const databaseName = process.env.DATABASE_NAME || pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');
console.log(databaseName, process.env.DATABASE_URL)
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
