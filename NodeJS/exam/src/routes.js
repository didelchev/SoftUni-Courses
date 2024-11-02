import { Router } from 'express';

import homeController from './controllers/home-controller.js';
import authController from './controllers/auth-controller.js';
import planetController from './controllers/planet-controller.js';

const routes = Router();

routes.use(homeController);
routes.use('/auth',authController);
routes.use('/planets', planetController)

routes.all("*", (req,res)=>{
    res.render('home/404', {title:'404 page'})
})

export default routes;