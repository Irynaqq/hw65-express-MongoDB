import Article from '../models/Article.js';

async function getMongoArticles(req, res) {
  try {
    const articles = await Article.find();
    const theme = req.cookies.theme || 'light';

    res.render('articles/mongo-articles.ejs', {
      title: 'MongoDB Articles',
      articles,
      theme,
    });
  } catch (error) {
    res.status(500).send('Error fetching articles from MongoDB');
  }
}

export { getMongoArticles };