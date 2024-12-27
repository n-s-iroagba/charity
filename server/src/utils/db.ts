import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('donation_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
