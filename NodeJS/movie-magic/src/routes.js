import { Router } from 'express';

const router = Router();

import homeController from './controllers/home-controller.js';
import movieController from './controllers/movie-controller.js';



router.use(homeController); 

router.use('/movies', movieController);

router.all("*", (req,res) => {
    res.render('404')
})

export default router;