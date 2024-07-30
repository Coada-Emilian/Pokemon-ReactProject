import { DataTypes, Model } from 'sequelize';
import { sequelize } from './clientSequelize.js';

export class Type extends Model {}

Type.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'type',
  }
);
