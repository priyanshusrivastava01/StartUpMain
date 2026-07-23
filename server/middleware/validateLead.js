const { body, validationResult } = require('express-validator');
const { errorResponse } = require('../utils/apiResponse');

const validateLeadInput = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Full Name must be between 2 and 100 characters'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone Number is required')
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Please enter a valid 10-digit Indian phone number'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),

  body('workspaceType')
    .trim()
    .notEmpty()
    .withMessage('Workspace type is required')
    .isIn(['Dedicated Desk', 'Private Cabin', 'Day Pass', 'Conference Room'])
    .withMessage('Workspace type must be Dedicated Desk, Private Cabin, Day Pass, or Conference Room'),

  body('message')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Message cannot exceed 500 characters'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      }));
      return errorResponse(res, 400, 'Validation Failed', formattedErrors);
    }
    next();
  },
];

module.exports = { validateLeadInput };
