const {Router} = require('express');
const router = Router();
const signInController = require('../controllers/sign_in.controller');
const getUserController = require('../controllers/get_user.controller');
const loginController = require('../controllers/login.controller');


// router.route('/')
//   .get(getUsers)
//   .post(createUser)

// Get the user logged in
router.route('/:id')
  .get(getUserController)

// Route to start using system
router.route('/log-in')
  .post(loginController)

// Route for register
router.route('/sign-in')
  .post(signInController)

module.exports = router;
