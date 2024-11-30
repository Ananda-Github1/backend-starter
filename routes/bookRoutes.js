const express = require('express')

const bookController =require('../controllers/bookController')
const  {validateBookData,validateBookId} = require('../middelware/validate')

const router = express.Router()

router.post('/books',[validateBookData],bookController.creatBook)
router.get('/books',bookController.getAllbooks)
router.get('/books/:id',[validateBookId],bookController.getBookByid)
router.put('/books/:id',[validateBookData],bookController.updateBook)
router.delete('/books/:id',[validateBookId],bookController.deleteBook)


module.exports= router;

