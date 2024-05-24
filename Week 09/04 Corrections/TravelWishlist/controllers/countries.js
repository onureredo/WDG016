import countries from '../data/countries.js';
import { validationResult } from 'express-validator';

// STEP 1 getAllCountries

export const getAllCountries = (req, res) => {
  res.json(countries);

  // sorting
  //   const sortedCountries = [...countries].sort((a, b) => {
  //     return a.name.localeCompare(b.name);
  //   });
  //   res.json(sortedCountries);
};

// STEP 2 addCountry
export const addCountry = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const { name, alpha2Code, alpha3Code } = req.body;

  // if country does not exist
  const existingCountry = countries.find(
    (country) =>
      country.alpha2Code === alpha2Code || countries.alpha3Code === alpha3Code
  );

  if (existingCountry) {
    return res.status(409).json({ message: 'Country already exists' });
  }

  const newCountry = {
    id: countries.length + 1,
    name,
    alpha2Code,
    alpha3Code,
  };
  countries.push(newCountry);
  res.status(201).json(newCountry);
};

// STEP 3 getCountryByCode
export const getCountryByCode = (req, res) => {
  const { code } = req.params;

  const country = countries.find(
    (country) =>
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
  );

  if (!country) {
    return res.status(404).json({ message: 'Country does not exist' });
  }
  res.json(country);
};

// STEP 4 updateCountry
export const updateCountry = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }

  const { code } = req.params;
  const { name, alpha2Code, alpha3Code } = req.body;

  const countryIndex = countries.findIndex(
    (country) =>
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
  );

  //   console.log(countryIndex);
  if (countryIndex === -1) {
    return res.status(404).json({ message: 'Country does not exist' });
  }

  const updatedCountry = {
    ...countries[countryIndex],
    name,
    alpha2Code,
    alpha3Code,
  };

  countries[countryIndex] = updatedCountry;
  res.json(updatedCountry);
};

// STEP 5 deleteCountry
export const deleteCountry = (req, res) => {
  const { code } = req.params;

  const countryIndex = countries.findIndex(
    (country) =>
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
  );

  if (countryIndex === -1) {
    return res.status(404).json({ message: ' Country does not exist' });
  }

  countries.splice(countryIndex, 1);
  res.json({ message: 'Country was deleted' });
};

// DELETE WITH VISITED FLAG
export const visitedCountry = (req, res) => {
  const { code } = req.params;

  const country = countries.find(
    (country) =>
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
  );

  country.visited = !country.visited;
  res.json(country);
};

// STEP 7
export const getCountriesView = (req, res) => {
  res.render('wishlist', { countries });
};

export const addCountry2 = (req, res) => {
  const { name, alpha2Code, alpha3Code, visited } = req.body;

  const newCountry = {
    id: countries.length + 1,
    name,
    alpha2Code,
    alpha3Code,
    visited,
  };
  countries.push(newCountry);
  res.redirect('/countries');
};
