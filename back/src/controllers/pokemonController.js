import { Pokemon, Team } from '../models/index.js';
import { Op } from 'sequelize';

export async function getAllPokemon(req, res) {
  try {
    const pokemon = await Pokemon.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          association: 'types',
        },
        {
          association: 'teams',
        },
      ],
    });

    if (!pokemon) {
      return res
        .status(404)
        .json({ error: 'Pokemon not found. Please try again later.' });
    }

    res.json(pokemon);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function getPokemonById(req, res) {
  try {
    const pokemonId = parseInt(req.params.id);

    if (isNaN(pokemonId)) {
      return res
        .status(404)
        .json({ error: 'Pokemon not found. Please verify the provided ID.' });
    }

    const foundPokemon = await Pokemon.findByPk(pokemonId, {
      include: [
        {
          association: 'types',
        },
        {
          association: 'teams',
        },
      ],
    });

    if (!foundPokemon) {
      return res
        .status(404)
        .json({ error: 'Pokemon not found. Please verify the provided ID.' });
    }

    res.status(201).json(foundPokemon);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function addPokemonToTeam(req, res) {
  try {
    const teamId = parseInt(req.params.teamId);

    if (isNaN(teamId)) {
      return res.status(404).json({ error: 'Invalid teamId.' });
    }

    const foundTeam = await Team.findByPk(teamId, {
      include: {
        association: 'pokemon',
      },
    });

    const pokemonId = parseInt(req.params.pokemonId);

    if (isNaN(pokemonId)) {
      return res.status(404).json({ error: 'Invalid teamId.' });
    }

    const foundPokemon = await Pokemon.findByPk(pokemonId, {
      include: {
        association: 'teams',
      },
    });

    if (!foundPokemon) {
      return res.status(404).json({ error: 'Pokemon not found.' });
    }

    foundTeam.addPokemon(foundPokemon);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function removePokemonFromTeam(req, res) {
  try {
    const teamId = parseInt(req.params.teamId);

    if (isNaN(teamId)) {
      return res.status(404).json({ error: 'Invalid teamId.' });
    }

    const foundTeam = await Team.findByPk(teamId, {
      include: {
        association: 'pokemon',
      },
    });

    const pokemonId = parseInt(req.params.pokemonId);

    if (isNaN(pokemonId)) {
      return res.status(404).json({ error: 'Invalid teamId.' });
    }

    const foundPokemon = await Pokemon.findByPk(pokemonId, {
      include: {
        association: 'teams',
      },
    });

    if (!foundPokemon) {
      return res.status(404).json({ error: 'Pokemon not found.' });
    }

    foundTeam.removePokemon(foundPokemon);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function findPokemonByName(req, res) {
  try {
    const term = req.query.term.toLowerCase();

    const foundPokemon = await Pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${term}%`,
        },
      },
      include: [
        {
          association: 'types',
        },
        {
          association: 'teams',
        },
      ],
    });
    if (!foundPokemon) {
      return res.status(404).json({ error: 'Pokemon not found.' });
    }
    res.status(200).json(foundPokemon);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}
