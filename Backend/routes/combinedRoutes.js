const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');

// Authentication routes
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/verify-email/:token', AuthController.verifyEmail);
router.post('/resend-verification', AuthController.resendVerification);
// router.get('/verify-email/:token', AuthController.verifyEmail);


// User routes
// router.get('/profile', UserController.getProfile);
router.get('/profile', authMiddleware, UserController.getProfile);             

// Update Address
// router.put('/profile/address', authMiddleware, userController.updateAddress);
// payment Routes 
// const paymentController = require('../controllers/paymentController');

// router.post('/init-payment', paymentController.initPayment);
// router.post('/payment/success', paymentController.paymentSuccess);
// router.post('/payment/fail', paymentController.paymentFail);
// router.post('/payment/cancel', paymentController.paymentCancel);




module.exports = router;
