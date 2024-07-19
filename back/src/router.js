import { Router } from "express";
import { controllerWrapper as cw } from "./utils/controllerWrapper.js";

import * as mainController from "./controllers/mainController.js";
import * as pokemonController from "./controllers/pokemonController.js";
import * as typesController from "./controllers/typesController.js";
import * as teamsController from "./controllers/teamsController.js";

export const router = Router();

router.get("/", cw(mainController.renderHomePage));

router.get("/pokemon", cw(pokemonController.getAllPokemon));
router.get("/pokemon/:id", cw(pokemonController.getPokemonById));
router.get("/search", cw(pokemonController.findPokemonByName));
router.patch("/pokemon/:teamId/:pokemonId", cw(pokemonController.addPokemonToTeam));
router.delete("/pokemon/:teamId/:pokemonId", cw(pokemonController.removePokemonFromTeam));

router.get("/types", cw(typesController.getAllTypes));

router.get("/teams", cw(teamsController.getAllTeams));
router.post("/teams", cw(teamsController.createTeam));
router.patch("/teams/:id", cw(teamsController.editTeamName));
router.delete("/teams/:id", cw(teamsController.deleteTeamById));
router.get("/teams/:id", cw(teamsController.getTeamById))

router.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});