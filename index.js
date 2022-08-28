import { readFileSync } from 'fs';
import { server } from './src/server.js';
import { config } from 'dotenv';
import 'dotenv/config';

config({ path: `.env.${process.env.NODE_ENV}` });

const rawConfig = readFileSync('./config.yml', 'utf8');

server(rawConfig);
