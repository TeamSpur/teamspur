const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient(process.env.REDIS_URL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/splash');
};

let storeOptions = process.env.REDIS_URL ?
{client: redisClient} :
{
  client: redisClient,
  host: 'localhost',
  port: 6379
};

module.exports.session = session({
  store: new RedisStore(storeOptions),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
