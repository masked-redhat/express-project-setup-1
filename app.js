import _env from "./constants/env.js"; // env variables
import _connect from "./db/connect.js";
import _close from "./db/close.js";
import initAssociation from "./assciations/association.js";
import server from "./server/socket.js";

const port = _env.app.PORT;

// Connect to databases
// _connect.nosql();
// _connect.sql();
// initAssociation(); // link all the tables

server.listen(port, _env.app.HOST, () => {
  console.log(`Application started on http://${_env.app.HOST}:${port}`);
});

// shutdown of the application
{
  const shutDown = () => {
    // Close running services here
    server.close();
    // _close.nosql();
    // _close.sql();

    console.debug("Gracefully closing the application");
  };

  process.on("SIGINT", () => {
    console.debug("Recieved SIGINT");
    shutDown();
  });

  process.on("SIGTERM", () => {
    console.debug("Recieved SIGTERM/(nodemon restarts)");
    shutDown();
  });
}
