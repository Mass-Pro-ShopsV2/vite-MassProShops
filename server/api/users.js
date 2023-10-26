import { Router } from 'express';
import  User  from '../db/models/User.js';
import { requireToken, isAdmin } from './gateKeepingMiddleware.js';

const router = Router();

export default router;

// GET /api/users
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'address', 'name', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:id
router.get('/:id', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'username', 'address', 'name', 'email'],
    });
    console.log(
      user.id,
      req.params.id,
      user.id === req.params.id,
      req.user.isAdmin
    );
    if (+user.id === +req.params.id || req.user.isAdmin) {
      res.send(user);
    } else {
      return res.status(403).send("ah ah ah, you didn't say the magic word");
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/users
router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const { name, email, password, address, username } = req.body;
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
      address: address,
      username: username,
    });
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.put('/:id', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).send({ msg: 'User not Found' });
    }
    if (+user.id === +req.params.id || req.user.isAdmin) {
      const { userId, ...userData } = req.body;
      userData.userId = userId;
      const updatedUser = await user.update(userData);
      res.send(updatedUser);
    } else {
      return res.status(403).send("ah ah ah, you didn't say the magic word");
    }
  } catch (error) {
    next(error);
  }
});

// Only the logged-in user can update their own info or delete it - NEED TO IMPLEMENT
// DELETE /api/users/:id
router.delete('/:id', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).send({ msg: 'User not Found' });
    }
    if (+user.id === +req.params.id || req.user.isAdmin) {
      const data = await User.findByPk(req.params.id);
      await data.destroy();
      res.send(data);
    } else {
      return res.status(403).send("ah ah ah, you didn't say the magic word");
    }
  } catch (error) {
    next(error);
  }
});
