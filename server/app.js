import path from 'path';
import express from 'express';
import morgan from 'morgan';

const app = express();

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth and API routes
import authRouter from './auth.mjs'; // Use the appropriate file extension for ES modules
import apiRouter from './api/index.mjs'; // Use the appropriate file extension for ES modules

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