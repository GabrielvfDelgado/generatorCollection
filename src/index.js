import { readFileSync, writeFileSync } from 'fs';
import { argv } from 'process';
import { collectionCreation } from './swaggerHandler.js';

const path = argv[2].replace(/\\/g, "/") || './documents/swaggers/swagger.json';
const rawData = readFileSync(path);
const data = JSON.parse(rawData);

const test = collectionCreation(data);
const title = test.info.name;
const version = '1.0.0';
const file = `${title}_${version}_collection.json`;
const body = JSON.stringify(test, 0, 2);
writeFileSync(`./src/documents/collections/${file}`, body);





