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
  res.send('Message sent!')
});
messagesRouter.get('/', (req, res) => {
  res.json(messages);
});
export default messagesRouter;