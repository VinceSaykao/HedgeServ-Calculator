import * as express from 'express';
export const routes = express.Router();

// Get route
routes.get('/', (req, res) => res.send({messages: 'vince'}));
routes.get('/calculator', (req, res) => res.send({messages: 'vince'}));

// Post route
routes.post('/calculator', (req, res) => res.send([req.body]));