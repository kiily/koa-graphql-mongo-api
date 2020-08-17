const Koa = require('koa');
const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');
const schema = require('./graphql/schema');
const initDB = require('./database');

initDB();
const app = new Koa();

app.listen(9000);

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  )
);

app.on('error', (err) => {
  console.log('SERVER ERROR', err);
});
