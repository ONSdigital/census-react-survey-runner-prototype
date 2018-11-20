import express from "express";
import yields from "express-yields";
import path from "path";
import cookieSession from 'cookie-session';
import webpack from "webpack";
import bodyParser from 'body-parser';
import controllers from './controllers';

export const __basedir = path.dirname(__dirname)

const port = process.env.PORT || 5000;
const app = express();


if (process.env.NODE_ENV === 'development') {
    const config = require(`${__basedir}/../webpack.config.dev.babel`).default;
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: "/static"
    }));

    app.use(require('webpack-hot-middleware')(compiler));

    app.use('/static', express.static(`${__basedir}/static`));
}

// TODO: serve from CDN
app.use('/static', express.static(`${__basedir}/static`));
app.get('/service-worker.js', (req, res) => {
    res.sendFile(`${__basedir}/static/service-worker.js`);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(cookieSession({
    name: 'session',
    secret: process.env.SESSION_SECRET,
    cookie: { secure: process.env.NODE_ENV !== 'development' },
    // TODO: don't use memorystore
}));

app.use(controllers)

app.listen(port, '0.0.0.0', () => console.info(`App listening on ${port}`));
