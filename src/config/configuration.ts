import * as process from 'node:process';

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT!, 10) || 3000,
  name: process.env.APP_NAME || 'NEST JS TASK 1'
});
