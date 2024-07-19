import { Pokemon } from "./Pokemon.js";
import { Team } from "./Team.js";
import { Type } from "./Type.js";
import { User } from "./User.js";


Pokemon.belongsToMany(Type, {
    through: "pokemon_has_type",
    foreignKey: "pokemon_id",
    as: "types"
});
Type.belongsToMany(Pokemon, {
    through: "pokemon_has_type",
    foreignKey: "type_id",
    as: "pokemon"
});

Pokemon.belongsToMany(Team, {
    through: "pokemon_has_team",
    foreignKey: "pokemon_id",
    as: "teams"
});
Team.belongsToMany(Pokemon, {
    through: "pokemon_has_team",
    foreignKey: "team_id",
    as: "pokemon"
});

User.hasMany(Team, {
    foreignKey: "author_id",
    as: "teams"
});
Team.belongsTo(User, {
    foreignKey: "author_id",
    as: "author"
});

export {Pokemon, Type, Team, User};