const express = require('express');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');


const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '60d',
  });
}

const loginUser = asyncHandler(async (req, res) => {
    const {username, password } = req.body;
    const user = await User.findOne({ username});

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            token: genToken(user._id),
        });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    });

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ name });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: genToken(user._id),
        });
    }else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const postUser = async (req, res, next) => {
    try {
        const result = await User.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        await User.deleteMany({});
        res.status(200).json({ message: 'All users deleted' });
    } catch (error) {
        next(error);
    }
}

const getUser = asyncHandler(async (req, res) => {
    try {
        const result = await User.findById(req.params.id);
        if (result) {
            res.status(200).json(result);
        }

        res
            .status(404)
            .setHeader('Content-Type', 'text/plain')
            .send('User not found');
    } catch (error) {
        next(error);
    }
});

const putUser = asyncHandler(async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (result) {
            res.status(200).json(result);
        }

        res
            .status(404)
            .setHeader('Content-Type', 'text/plain')
            .send('User not found');
    } catch (error) {
        next(error);
    }
});


const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
        res
            .status(404)
            .setHeader('Content-Type', 'text/plain')
            .send('User not found');
    }

    await user.remove();
    res.status(200).json({ message: 'User removed' });
});

module.exports = {
    loginUser,
    registerUser,
    getUsers,
    postUser,
    deleteUser,
    getUser,
    putUser,
    deleteUsers,
};
