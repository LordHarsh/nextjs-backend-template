import express from 'express';
import Loaders from './loaders';

async function startServer() {
  const app = express();
  await Loaders({ expressApp: app });
  app
    .listen(3000, () => {
      console.log(`
      ################################################
      Server listening on port: ${3000} 
      ################################################
    `);
    })
    .on('error', (err: Error) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();