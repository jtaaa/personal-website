import * as dotenv from 'dotenv'; dotenv.config();
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

import { passport, session } from './auth';

import authRouter from './routes/auth';
import splashRouter from './routes/splash';
import infoRouter from './routes/info';
import projectsRouter from './routes/projects';
import userRouter from './routes/user';
import logRouter from './routes/log';
import sectionRouter from './routes/section';
import subsectionRouter from './routes/subsection';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);
app.use('/api/splash', splashRouter);
app.use('/api/info', infoRouter);
app.use('/api/project', projectsRouter);
app.use('/api/user', userRouter);
app.use('/api/log', logRouter);
app.use('/api/section', sectionRouter);
app.use('/api/subsection', subsectionRouter);

// Production react frontend serving
if (process.env.NODE_ENV === 'production') {
  // Serve static React build folder
  app.use(express.static(path.join(__dirname, 'build')));
  // Let React handle routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  if (err.statusCode) {
    res.status(err.statusCode).json({ error: err });
  } else {
    res.status(500).json({ error: err });
  }
});

export default app;
