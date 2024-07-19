import { DataTypes, Model } from "sequelize";
import { sequelize } from "./clientSequelize.js";

export class Pokemon extends Model {}

Pokemon.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  evolution_id: {
    type: DataTypes.INTEGER,
  },
  devolution_id: {
    type: DataTypes.INTEGER,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  atk: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  def: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  atk_spe: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  def_spe: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "pokemon"
});
