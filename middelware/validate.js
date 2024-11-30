const Joi =  require('joi')

// Define Joi schema for book validation
const bookSchema = Joi.object({
  title: Joi.string().required().min(3).max(255).messages({
    'string.empty': 'Title is required',
    'string.min': 'Title should be at least 3 characters long',
    'string.max': 'Title should not exceed 255 characters',
  }),
  author: Joi.string().required().min(3).max(255).messages({
    'string.empty': 'Author is required',
    'string.min': 'Author name should be at least 3 characters long',
    'string.max': 'Author name should not exceed 255 characters',
  }),
  publishedDate: Joi.date().optional().messages({
    'date.base': 'Invalid date format for publishedDate',
  }),
  genre: Joi.string().optional().max(50).messages({
    'string.max': 'Genre should not exceed 50 characters',
  }),
  availableCopies: Joi.number().integer().required().min(0).messages({
    'number.base': 'Available Copies must be a valid number',
    'number.min': 'Available Copies cannot be less than 0',
    'any.required': 'Available Copies is required',
  }),
});

const bookIdSchema = Joi.object({
  bookId: Joi.string().guid({ version: 'uuidv4' }).required().messages({
    'string.guid': 'Invalid book ID format. It should be a valid UUID.',
    'any.required': 'Book ID is required.',
  })
});

 const validateBookId = (req, res, next) => {
  const { error } = bookIdSchema.validate({ bookId: req.params.id });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const validateBookData = (req, res, next) => {
  const { error, value } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.body = value;
  next(); 
};

module.exports = {validateBookData,validateBookId};
