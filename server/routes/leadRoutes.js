const express = require('express');
const router = express.Router();
const { createLead, getLeads } = require('../controllers/leadController');
const { validateLeadInput } = require('../middleware/validateLead');

// POST /api/leads - Create new lead with validation
router.post('/', validateLeadInput, createLead);

// GET /api/leads - Retrieve leads list
router.get('/', getLeads);

module.exports = router;
