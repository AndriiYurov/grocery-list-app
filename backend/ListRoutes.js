const { Router } = require('express');
const router = Router();
const { getList, saveList, deleteList, updateList, deleteMany } = require('./ListController');

router.get('/', getList);
router.post('/saveList', saveList);
router.post('/deleteList', deleteList);
router.post('/updateList', updateList);
router.post('/deleteMany', deleteMany)

module.exports = router;

