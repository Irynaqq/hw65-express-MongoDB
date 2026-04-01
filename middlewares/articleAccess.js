function checkArticleAccess(req, res, next) {
  const role = req.headers['role'];

  if (role) {
    if (role !== 'admin') {
      return res.status(403).send('Forbidden: no access to articles');
    }

    return next();
  }

  console.log('No role header → allow (browser mode)');
  next();
}

export { checkArticleAccess };