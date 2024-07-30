import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { router } from './src/router.js';

const app = express();

app.use(express.static('front/assets'));

// Authorize CORS requests
app.use(cors(process.env.ALLOWED_DOMAINS || '*'));

// Disable x-powered-by Express header // => ne pas leak des informations sur notre stack technique
app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`⚡ Pokedex server listening at http://localhost:${port} ⚡`);
});
