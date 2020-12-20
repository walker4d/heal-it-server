const express = require('express');
 require('../helpers/OAuth');
const passport = require('passport');
const router = express.Router();

const userController = require('../Controllers/userController');
const AuthController = require('../Controllers/AuthenticationController');
const{ auth } = require('../middlewares/VerifyToken');
const HealthController = require('../Controllers/HealthController');

//get posts

router.get('/',userController.users);

//user/login 
router.put('/user/:id',userController.updateUser);

//user/login
router.post('/login',AuthController.login);
//register
router.post('/register',AuthController.register);

router.post('/mobile/register',AuthController.mobile_register);

// account activation 
router.post('/activation',AuthController.activate_account);
//reset password
router.put('/password/reset',AuthController.changePassword);
//forget password
router.post('/password/forgot',AuthController.forgetPassword);

router.post('/googlelogin',AuthController.GoogleOAuth_Login);

router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/failed'},function(req,res){
    
    res.redirect('/good');
}));



//health
router.post('/user/checkup',HealthController.health);

//serch symptoms
router.post('/health/Symptoms',HealthController.Symtomps);

//health
router.get('/user/covid-checkup',HealthController.health);

router.post('/health/triage',HealthController.Triage);
router.post('/health/recomend',HealthController.recomend);
router.post('/health/condition',HealthController.Condition);






module.exports = router;

