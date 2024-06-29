const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const plNames = ['C', 'C++', 'HTML'];
const basketLists = [];
const items = [
  {"name": "item01", "imagem": "img1", "description": "Description one here."},
  {"name": "item02", "imagem": "img2", "description": "Description two here."},
  {"name": "item03", "imagem": "img3", "description": "Description three here."},
  {"name": "item04", "imagem": "img4", "description": "Description four here."},
  {"name": "item05", "imagem": "img5", "description": "Description five here."},
  {"name": "item06", "imagem": "img6", "description": "Description six here."},
  {"name": "item07", "imagem": "img7", "description": "Description seven here."},
  {"name": "item08", "imagem": "img8", "description": "Description eight here."},
  {"name": "item09", "imagem": "img9", "description": "Description nine here."}
];

app.get('/', (req, res) => {
  res.status(200).render('home', { title: 'Home Page', plNames: plNames, basketLists: basketLists, item: items });
});

app.post('/code', (req, res) => {
  plNames.push(req.body.plName);
  res.redirect('/');
});

app.get('/inputs', (req, res) => {
  res.status(200).render('inputs', { title: 'Input itens', item: items})
});

app.post('/basket', (req, res) => {
  basketLists.push(req.body.basketList);
  res.redirect('/');
  console.log('The new item was add')
});

app.get('/about', (req, res) => {
  res.status(201).render('about', { title: 'About Page' })
});

app.get('/contact', (req, res) => {
  res.status(201).render('contact', { title: 'Contact Page', plNames: plNames })
});

app.get('/basket', (req, res) => {
  res.status(201).render('basket', { title: 'Basket', basketLists: basketLists})
});


app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Internal Server Error' });
});

const port = 3019;
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`The server running port: http://localhost:${port}`);
});
console.log(basketLists);