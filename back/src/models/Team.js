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
    avatarSourceId: {
      type: DataTypes.INTEGER,
    },
    pokemonArray: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  },
  {
    sequelize,
    tableName: 'team',
  }
);
