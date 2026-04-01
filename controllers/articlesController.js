function getArticles(req, res) {
  const articles = [
    { id: 1, title: 'Node.js Basics', description: 'Introduction to Node.js' },
    { id: 2, title: 'Express Guide', description: 'Getting started with Express' },
    { id: 3, title: 'EJS Templates', description: 'How to use EJS in Express' },
  ];

  const theme = req.cookies.theme || 'light';

  res.render('articles/articles.ejs', {
    title: 'Articles',
    articles,
    theme,
  });
}

function postArticles(req, res) {
  res.send('Post articles route');
}

function getArticleById(req, res) {
  const { articleId } = req.params;

  const article = {
    id: articleId,
    title: `Article ${articleId}`,
    description: `This is article ${articleId} description`,
  };

  const theme = req.cookies.theme || 'light';

  res.render('articles/article-details.ejs', {
    title: 'Article Details',
    article,
    theme,
  });
}

function putArticleById(req, res) {
  const { articleId } = req.params;
  res.send(`Put article by Id route: ${articleId}`);
}

function deleteArticleById(req, res) {
  const { articleId } = req.params;
  res.send(`Delete article by Id route: ${articleId}`);
}

export {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById,
};