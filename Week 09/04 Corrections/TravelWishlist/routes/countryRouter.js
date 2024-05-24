import { Router } from 'express';
import {
  addCountry,
  addCountry2,
  deleteCountry,
  getAllCountries,
  getCountryByCode,
  updateCountry,
  visitedCountry,
} from '../controllers/countries.js';
import countryValidator from '../validator/countryValidator.js';

const countryRouter = Router();

countryRouter.get('/', getAllCountries);
countryRouter.get('/:code', getCountryByCode);
// countryRouter.post('/', countryValidator, addCountry);
countryRouter.post('/', countryValidator, addCountry2);
countryRouter.put('/:code', countryValidator, updateCountry);
countryRouter.delete('/:code', visitedCountry);
// countryRouter.delete('/:code', deleteCountry);

export default countryRouter;
