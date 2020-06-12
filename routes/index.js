const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Bosh sahifa' });
});
//about
router.get('/about', (req, res, next)=> {
  res.render('about', { title: 'Biz haqimizda' });
});
//categori
router.get('/categori', (req, res, next)=> {
  res.render('categori', { title: 'Bo`limlar' });
});
//latest_news
router.get('/latest_news', (req, res, next)=> {
  res.render('latest_news', { title: 'Oxirgi yangiliklar' });
});
//contact
router.get('/contact', (req, res, next)=> {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
