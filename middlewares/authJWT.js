import jwt from 'jsonwebtoken';

const SECRET = 'supersecretkey';

function verifyToken(req, res, next) {
  const token = req.cookies.token;

  // если токена нет
  if (!token) {
    console.log('No token → allow (browser mode)');
    return next(); // пропускаем для удобства проверки
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;

    console.log('Token verified:', decoded);

    next();
  } catch (error) {
    return res.status(403).send('Invalid token');
  }
}

export { verifyToken };