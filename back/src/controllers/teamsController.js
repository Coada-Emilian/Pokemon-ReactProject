import { Team, Pokemon } from '../models/index.js';
import Joi from 'joi';

export async function getAllTeams(req, res) {
  try {
    const teams = await Team.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          association: 'pokemon',
        },
      ],
    });

    if (!teams) {
      return res
        .status(404)
        .json({ error: 'Teams not found. Please try again later.' });
    }

    res.json(teams);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function createTeam(req, res) {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string(),
      author_id: Joi.number().integer(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { name, description, author_id } = req.body;

    const createdTeam = await Team.create({ name, description, author_id });

    res.status(201).json(createdTeam);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function editTeamName(req, res) {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const teamId = parseInt(req.params.id);
    if (isNaN(teamId)) {
      return res
        .status(404)
        .json({ error: 'Team not found. Please verify the provided ID.' });
    }

    const { name } = req.body;

    const foundTeam = await Team.findByPk(teamId);
    if (!foundTeam) {
      return res
        .status(404)
        .json({ error: 'Team not found. Please verify the provided ID.' });
    }

    foundTeam.name = name;
    await foundTeam.save();

    res.status(201).json(foundTeam);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function deleteTeamById(req, res) {
  try {
    const teamId = parseInt(req.params.id);
    if (isNaN(teamId)) {
      return res
        .status(404)
        .json({ error: 'Team not found. Please verify the provided ID.' });
    }

    const foundTeam = await Team.findByPk(teamId);
    if (!foundTeam) {
      return res
        .status(404)
        .json({ error: 'Team not found. Please verify the provided ID.' });
    }

    await foundTeam.destroy();

    res.status(201).end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function getTeamById(req, res) {
  try {
    const teamId = parseInt(req.params.id);

    if (isNaN(teamId)) {
      return res
        .status(404)
        .json({ error: 'Team not found. Please verify the provided ID.' });
    }

    const foundTeam = await Team.findByPk(teamId, {
      include: [
        {
          association: 'pokemon',
        },
      ],
    });

    if (!foundTeam) {
      return res
        .status(404)
        .json({ error: 'Team not found. Please verify the provided ID.' });
    }

    res.status(201).json(foundTeam);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}
