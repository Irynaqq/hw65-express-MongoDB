import { users } from '../config/passport.js';

function register(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  const newUser = { email, password };
  users.push(newUser);

  return res.send('User registered');
}

function loginSuccess(req, res) {
  return res.send(`User logged in: ${req.user.email}`);
}

function logout(req, res, next) {
  req.logout(err => {
    if (err) {
      return next(err);
    }

    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.send('User logged out');
    });
  });
}

export { register, loginSuccess, logout };