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
      id: 1,
      title: 'Baile da Akyam',
      date: '2024-11-23T20:00:00',
      location: 'Lindoia, SP',
      description: 'Baile exclusivo e organizado pela Dj Akyam. Uma noite inesquecível com os melhores hits do funk.',
      image: '/images/hero.jpg',
    },
  ];

  const eventHighlights = Array.from({length: 8}, (_, i) => ({
    id: i + 1,
    title: `Evento Incrível ${i + 1}`,
    image: `/images/event-highlight-${i + 1}.jpg`
  }));

  res.render('events', { title: 'DJ Akyam - Eventos', events, eventHighlights });
});

app.get('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(e => e.id === eventId);

  if (event) {
    res.render('event-details', { title: `DJ Akyam - ${event.title}`, event });
  } else {
    res.status(404).send('Evento não encontrado');
  }
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
