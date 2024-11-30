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
  res.json(messages);
});

// messagesRouter.get('/', (req, res) => {
//   try {
//     const filteredMessages = messages.sort((firstMessage, secondMessage) => Date.parse(secondMessage.dateTime) - Date.parse(firstMessage.dateTime));
//     const latestMessages = filteredMessages.slice(0, 5);
//     res.json(latestMessages);
//   } catch (error) {
//     console.error('error occurred', error);
//   }
// });

export default messagesRouter;