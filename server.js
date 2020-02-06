const express = require('express');
const passport = require('passport');
const session = require('express-session');

const path = require('path');
const passportConfig = require('./services/passport');

const app = express();

const mainRoute = require('./routes/mainRoute');
const projectDataRoute = require('./routes/projectDataRoute');
const loginRoute = require('./routes/loginRoute');
const projectRoute = require('./routes/projectRoute');

// 세션 활성화
app.use(session({
  secret: '!@#$%^&*',
  resave: true,
  saveUninitialized: false,
}));

// passport 구동 및 세션 연결
app.use(passport.initialize());
app.use(passport.session());

passportConfig();
app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'html');

app.use('/static', express.static(`${__dirname}/public`));
app.use('/img', express.static(`${__dirname}/public/img`));
app.use('/fonts', express.static(`${__dirname}/public/fonts`));
app.use('/project_data', projectDataRoute);
app.use('/login', loginRoute);
app.use('/project', projectRoute);
app.use('/', mainRoute);

app.listen(3000, () => {
  console.log('server start');
});
