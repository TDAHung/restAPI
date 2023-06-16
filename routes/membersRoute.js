const express = require('express');
const router = express.Router();
const memberController = require('../controllers/membersControler');
router.get('/', memberController.getAll);
router.get('/:id', memberController.getByID);
router.post('/', memberController.create);
router.put('/:id', memberController.update);
router.delete('/:id', memberController.delete);

module.exports = router;
