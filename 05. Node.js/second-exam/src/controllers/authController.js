import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();


// REGISTER
authController.get("/register", (req,res)=>{
    res.render("auth/register", {title: "Register Page"})
})

authController.post('/register', async (req, res) => {
    const { name, email, password, rePassword } = req.body;

    // Validate email format using validator library
    // if (!validator.isEmail(email)) {
    //     return res.status(400).end();
    // }

    // Validate if repassword is the same
    // if (password !== rePassword) {
    //     return res.status(400).end();
    // }

    try {
        await authService.register(name, email, password, rePassword);
    } catch (err) {
        return res.render('auth/register', { error: getErrorMessage(err), email });
    }

    const token = await authService.login(email, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

// LOGIN
authController.get("/login", (req,res)=>{
    res.render("auth/login", {title: "Login Page"})
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});


// LOGOUT
authController.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
});

export default authController