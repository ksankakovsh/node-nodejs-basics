import fs from 'fs/promises';
import { constants } from 'fs';
const create = async () => {
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', (error) => {
        error ? console.log(error) : null;
    });
    constants.F_OK;
    try {
        await fs.access('./files/fresh.txt', constants.F_OK);
        console.log('FS operation failed');
    } catch {
        console.error('file does not exists');
    }
};

await create();