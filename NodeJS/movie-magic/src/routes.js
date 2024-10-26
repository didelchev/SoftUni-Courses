import { Router } from 'express';

const router = Router();

import homeController from './controllers/home-controller.js';
import movieController from './controllers/movie-controller.js';
import castsController from './controllers/casts-controller.js';



router.use(homeController); 

router.use('/movies', movieController);

router.use('/casts', castsController);

router.all("*", (req,res) => {
    res.render('404')
})

export default router;