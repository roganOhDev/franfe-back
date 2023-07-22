import { Router } from 'express';
import { bcd } from '../domain/googleMap/googleMapTransactionService.js';

let router;
export default router = Router();

router.get('/googleMap/:id', (req) => {
  const requestUuid = req.query.uuid;
  const response = bcd(req);
  response.json(response);
});

router.post('/googleMap/:id', (req) => {
  const requestUuid = req.query.uuid;
  const request = req.body;
  const response = bcd(req);
  response.json(response);
});
