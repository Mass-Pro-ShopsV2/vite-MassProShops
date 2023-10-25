//this is the access point for all things database related!

import db from './db.js';
import User from './models/User.js';
import Product from './models/Product.js';

export default {
    db,
    models: {
        User,
        Product
    },
};

export {Product}
export {User}