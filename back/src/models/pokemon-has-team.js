import { DataTypes } from "sequelize";
import { sequelize } from "./clientSequelize.js";

export const PokemonHasTeam = sequelize.define('pokemon_has_team', {
    pokemon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});