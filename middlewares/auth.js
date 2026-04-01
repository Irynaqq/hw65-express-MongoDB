function basicAuth(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (authHeader) {
    return next();
  }

  console.log('No auth header → allow (browser mode)');
  next();
}

export { basicAuth };