import { Router } from 'express';

const router = Router();

import homeController from './controllers/home-controller.js';

router.use(homeController)

export default router;