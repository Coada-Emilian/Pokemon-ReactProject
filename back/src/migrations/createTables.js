import { sequelize } from '../models/index.js';

console.log('Deleting existing tables...');
await sequelize.drop();

console.log('Defining new tables...');
await sequelize.sync();

console.log('Migration OK!...');
await sequelize.close();
