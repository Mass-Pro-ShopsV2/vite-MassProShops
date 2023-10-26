import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the allowed origin(s)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  };
  
app.use(cors());

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Received a request:', req.method, req.url);
    next();
  });
// Auth and API routes
import authRouter from './auth/index.js'; // Use the appropriate file extension for ES modules
import apiRouter from './api/index.js'; // Use the appropriate file extension for ES modules

app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'public/index.html')
));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
    if (path.extname(req.path).length) {
        const err = new Error('Not found');
        err.status = 404;
        next(err);
    } else {
        next();
    }
});

// Sends index.html
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

export default app;