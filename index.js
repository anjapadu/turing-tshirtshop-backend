import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const allowedOrigins = {

}
const corsOptionsDelegate = function (req, callback) {
    // if (req.originalUrl.indexOf('/api/') > -1) {
    //     return callback(null, true);
    // }
    const origin = req.header('Origin');
    console.log(origin);
    // if (!origin) {
    //     return callback(null, true);
    //     return callback(new Error('ERR_CORS'));
    // }
    // if (!allowedOrigins[origin]) {
    //     return callback(new Error('ERR_CORS'), false);
    // }
    return callback(null, true);
}
app.use(cors(corsOptionsDelegate));

app.get('/', (req, res) => {
    res.status(200).send({
        msg: 'Hello World'
    })
})

const httpsServer = http.createServer(app);
httpsServer.listen(3000, () => {
    console.log('HTTP Server running on 3000')
})