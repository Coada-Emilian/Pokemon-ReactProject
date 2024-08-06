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

export async function signUpUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    if (!newUser) {
      return res
        .status(404)
        .json({ error: 'User could not be created. Please try again later.' });
    }
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
    });

    if (!users) {
      return res
        .status(404)
        .json({ error: 'Users not found. Please try again later.' });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unexpected server error. Please try again later.' });
  }
}
