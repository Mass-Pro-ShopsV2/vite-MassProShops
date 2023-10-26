import  db from './db/db.js'; // Use the appropriate file extension for ES modules
import { config as dotenvConfig } from 'dotenv';
import app from './app.js'
import seed from '../script/seed.js';

dotenvConfig();

const PORT = 8080;

const init = async () => {
    try {
        if (process.env.SEED === 'true') {
            await seed();
        } else {
            await db.sync();
        }
        // start listening
        app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
    } catch (ex) {
        console.log(ex);
    }
};

init();
