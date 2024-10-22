const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const releases = [
    {
      title: 'Em breve...',
      description: '',
      image: '/images/release.jpg',
      link: '#',
    },
    {
      title: 'SET CASTIGO DESPENCA NOIA',
      description: 'Melhor set já feito.',
      image: '/images/release.jpg',
      link: 'https://soundcloud.com/djakyam/set-castigo-despenca-noia',
    },
    {
      title: 'Em breve...',
      description: '',
      image: '/images/release.jpg',
      link: '#',
    },
  ];

  res.render('index', { title: 'DJ Akyam - Início', releases});
});

app.get('/gallery', (req, res) => {
  const galleryDir = path.join(__dirname, 'public', 'images', 'gallery');

  fs.readdir(galleryDir, (err, files) => {
    if (err) {
      console.error('Erro ao ler o diretório de imagens:', err);
      return res.status(500).send('Erro ao carregar as imagens');
    }

    const imagens = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

    res.render('gallery', { title: 'DJ Akyam - Galeria', imagens });
  });
});

app.get('/events', (req, res) => {
  const events = [
    {
      title: 'Baile da Akyam',
      date: '23 de Novembro de 2024',
      location: 'Monte Siao, MG',
      description: 'Baile exclusivo e organizado pela Dj Akyam.',
      image: '/images/release.jpg',
      link: '#',
    },
  ];

  res.render('events', { title: 'DJ Akyam - Eventos', events });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'DJ Akyam - Contato'});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'DJ Akyam - Sobre' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
