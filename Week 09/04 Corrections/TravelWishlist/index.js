import express from 'express';
import countryRouter from './routes/countryRouter.js';
import { getCountriesView } from './controllers/countries.js';

const app = express();
const PORT = 8000;

app.use(express.json()); // body-parser for post reqeusts w/ JSON
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// ROUTES
app.use('/api/countries', countryRouter);
app.use('/countries', getCountriesView);

app.listen(PORT, () => console.log(`Server is running on PORT${PORT}`));
