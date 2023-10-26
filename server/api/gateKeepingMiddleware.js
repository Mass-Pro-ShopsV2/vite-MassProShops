import  User from '../db/models/User.js';

export const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("ah ah ah, you didn't say the magic word");
  } else {
    next();
  }
};