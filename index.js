
import './src/lib/utils'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';
import graphRouter from './src/routes/graph'
import middleware from './src/lib/security-middleware'
import path from 'path'
// if (process.env.NODE_ENV !== 'production') {


const app = express();
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
/**
 * Activate logs on morgan
 */
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
/**
 * Activate and map static route for images
 */
app.use('/images', express.static(path.join(__dirname, 'src/assets/images/products')));
/**     
 * Cors allowed origins
 */
const allowedOrigins = {
    "http://localhost:4000": true,
    "http://localhost:4000/": true,
}
var corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins[origin]) {
            return callback(null, true)
        } else {
            callback(new Error('ERR_CORS'))
        }
    }
}
/**
 * Activate cors
 */
app.use(cors(corsOptions));

/**
 * Allow security middleware in graphql endpoint but not ask for credentials.
 * This way we can allow all requests to pass the firs layer allowing the graphql resolvers to read the token encrypted data if it has one.  
 * (It's possible also to create 2 graphql endpoints 1 private and 1 public)
 * Remember graphql endpoint is configured as "/api"
 */
let mw = middleware({
    credentialsRequired: false
})
app.use('/api', mw);
/**
 * Activate graphql 
 * */
app.use('/', graphRouter);

/**
 * Error formatter/handler
 */
app.use(function (err, req, res, next) {
    if (err) {
        switch (err.message) {
            case 'AUTHORIZATION_ERROR':
                return res.status(401).json({
                    code: 403,
                    message: 'Authorization error'
                })
            case 'ERR_CORS':
                return res.status(403).json({
                    code: 403,
                    message: 'Not allowed by CORS'
                });
            default:
                return res.status(err.status || 500).json({
                    code: err.status || 500,
                    message: err.message.charAt(0).toUpperCase() + err.message.slice(1)
                });
        }
    }
    return next()
})

const httpsServer = http.createServer(app);
httpsServer.listen(3035, () => {
    console.log('HTTP Server running on 3035')
})