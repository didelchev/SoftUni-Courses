import { Router } from "express";
import authService from "../services/authService.js";

const router = Router();

// GET
router.get('/register', (req, res ) => {
    res.render('auth/register');
})

router.get('/login', (req, res ) => {
    res.render('auth/login')
})


// POST
router.post('/register' , async (req,res) => {
     const { email, password, rePassword} = req.body;

     await authService.register(email, password)

    res.redirect('/auth/login');

})


export default router;
