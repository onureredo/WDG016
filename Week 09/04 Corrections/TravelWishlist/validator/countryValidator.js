import { body } from 'express-validator';

const countryValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('alpha2Code')
    .notEmpty()
    .isLength({ min: 2, max: 2 })
    .withMessage('alpha2Code must be 2 characters'),
  body('alpha3Code')
    .notEmpty()
    .isLength({ min: 3, max: 3 })
    .withMessage('alpha3Code must be 3 characters'),
];

export default countryValidator;
