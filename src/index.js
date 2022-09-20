import { readFileSync, writeFileSync } from 'fs';
import { argv } from 'process';
import { collectionCreation } from './swaggerHandler.js';

const path = argv[2].replace(/\\/g, "/") || './documents/swaggers/swagger.json';
const rawData = readFileSync(path);
const data = JSON.parse(rawData);

// const clone = Object.assign({}, modelNewColletion);
// clone.name = 'gabriel';
// collectionCreation(data)
console.log(collectionCreation(data).item[0].item);



