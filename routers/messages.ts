import express from 'express';
import {Messages} from '../types';


const messagesRouter = express.Router();

const messages: Messages[] = [];
const date = new Date();

messagesRouter.post('/', (req, res) => {
  messages.push({
    message: req.body.message,
    dateTime: date.toISOString(),
  });
  res.json(messages);
});
messagesRouter.get('/', (req, res) => {
  if (req.body.message && req.body.dateTime >= 5) {
    res.json(messages);
  }
});
export default messagesRouter;