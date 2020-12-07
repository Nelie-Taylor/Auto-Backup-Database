const express = require('express');
const router = express.Router();

const home = require('./Controller/home');
const task = require('./Controller/task');

router.get('/', home.view);
router.post('/create-backup', task.createBackup);

module.exports = router;