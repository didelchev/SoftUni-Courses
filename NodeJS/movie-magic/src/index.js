import express from  'express';

import routes from './routes.js'
import handlebarsInit from './config/handlebarsInit.js';
import exppressInit from './config/expressInit.js';
import mongooseInit from './config/mongooseInit.js';
const app = express();

mongooseInit();
handlebarsInit(app);
exppressInit(app);

app.use(routes);


app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000 ....');
    
})