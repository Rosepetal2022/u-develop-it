const express = require('express');
const router = express.Router();
router.use(require('./voterRoutes.js'));

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));


module.exports = router; 