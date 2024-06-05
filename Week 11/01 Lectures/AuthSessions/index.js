import express from 'express';
import session from 'express-session';

const app = express();
const PORT = 8000;

const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false, // session wird nicht bei jedem Request erneut gespeichert.
  saveUninitialized: false, // Neue sessions, die noch nicht geändert wurden, werden nicht gespeichert.
};

app.use(session(sess));
console.log(session);

// Routes
app.get('/login/:username', (req, res) => {
  req.session.username = req.params.username;
  res.send(`Hello, ${req.params.username}. You are now logged in`);
});

app.get('/profile', (req, res) => {
  if (req.session.username) {
    res.send(`You are now logged in as ${req.session.username}`);
  } else {
    res.send('Please login first');
  }
});

app.get('/route1', (req, res) => {
  req.session.myNewSession =
    'You have visited the page /route1 during your navigation';
  res.send('move to route2');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.send('Logged out');
});

app.get('/route2', (req, res) => {
  res.send(req.session.myNewSession || 'not visited yet');
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
