const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();


//blog routes
router.get('/', blogController.blog_index);
  
router.post('/', blogController.blog_create_post);

router.get('/create', blogController.blog_create_get);
  
router.get('/:id', blogController.blog_details);
  
router.delete('/:id', blogController.blog_delete);
  
// router.post('/', blogController.blog_delete_all);

// router.delete('/search', blogController.blog_search);

module.exports = router;