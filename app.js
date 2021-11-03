const DatabaseService = require('./database');
const appRouter = require('./routes/routes');

async function bootStrap(app) {
  await connectToDatabase();
  initRoutes(app);
  bootServer(app);
}


function connectToDatabase() {
  return DatabaseService.connectToDatabase();
}

function initRoutes(app) {
  app.use(appRouter);
}

function bootServer(app) {
  app.listen(3210, () => {
    console.log('Application Server listening on port 3210.');
  });
}

module.exports = {
  bootStrap,
}