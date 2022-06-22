import * as express from 'express';
export const routes = express.Router();

routes.get('/', (req, res) => res.send({hello: 'world'}));
routes.get('/history', (req, res) => res.send([]));
routes.post('/history', (req, res) => res.send([req.body]));