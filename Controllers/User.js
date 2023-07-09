const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { sendResponseError } = require('../Middleware/middleware');
const { checkPassword, newToken } = require('../Helper');

const signUpUser = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 8);

    await User.create({ email, fullName, password: hash });
    res.status(201).send('Successfully Account Created.');
    return;
  } catch (err) {
    console.log('Error: ', err);
    sendResponseError(500, 'Something went wrong. Please try again.', res);
    return;
  }
};

const signInUser = async (req, res) => {
  const { password, email } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      sendResponseError(400, 'Signup First!', res);
      return;
    }

    const isPasswordValid = await checkPassword(password, user.password);
    if (isPasswordValid) {
      const token = newToken(user);
      res.status(200).send({ status: 'Ok', token });
      return;
    }

    sendResponseError(400, 'Invalid password!', res);
  } catch (err) {
    console.log('Error:', err);
    sendResponseError(500, `Error: ${err}`, res);
  }
};

const getUser = async (req, res) => {
  res.status(200).send({ user: req.user });
};

module.exports = { signUpUser, signInUser, getUser };
