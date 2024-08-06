import { where } from 'sequelize';
import { User } from '../models/index.js';

export async function signInUser(req, res) {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({
      where: { email: email } && { password: password },
    });
    if (!foundUser) {
      return res
        .status(404)
        .json({ error: 'User not found. Please try again later.' });
    }
    res.status(201).json(foundUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}
