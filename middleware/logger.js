// Log requests to console

const logger = (req, resp, next) => {
    req.hello = 'Hello world';
    console.log('Middleware ran');
    next();
};

module.exports = logger;