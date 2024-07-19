import { DataTypes } from "sequelize";
import { sequelize } from "./clientSequelize.js";

export const PokemonHasType = sequelize.define('pokemon_has_type', {
    pokemon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});