import { DataTypes, Model } from 'sequelize';
import { sequelize } from './clientSequelize.js';

export class Team extends Model {}

Team.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: 'team',
  }
);
