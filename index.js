import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';
import graphRouter from './src/routes/graph'

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const allowedOrigins = {
    "localhost:3000": true
}
var corsOptions = {
    origin: function (origin, callback) {
        return callback(null, true)
        if (allowedOrigins[origin]) {
            callback(null, true)
        } else {
            // callback(null, true)
            callback(new Error('ERR_CORS'))
        }
    }
}
app.use(cors(corsOptions));
app.use('/', graphRouter);
app.use(function (err, req, res, next) {
    if (err) {
        switch (err.message) {
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
// app.post('/', (req, res) => {
//     res.status(200).send({
//         msg: 'Hello World'
//     })
// })

const httpsServer = http.createServer(app);
httpsServer.listen(3035, () => {
    console.log('HTTP Server running on 3035')
})