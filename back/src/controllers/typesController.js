import { Type } from '../models/index.js';

export async function getAllTypes(req, res) {
  try {
    const types = await Type.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          association: 'pokemon',
        },
      ],
    });

    if (!types) {
      return res
        .status(404)
        .json({ error: 'Types not found. Please try again later.' });
    }

    res.json(types);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}
