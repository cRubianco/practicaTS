import { Sequelize } from "sequelize";
import CONSTANTS from "../utils/constants";

const db = new Sequelize('inmob', 'admin', 'admin', {
  host: CONSTANTS.HOST,
  dialect: 'mysql',
  // logging: false
});

export default db;