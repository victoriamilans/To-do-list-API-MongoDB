import { app } from "./app";
import { connection } from "./database/mongo.client";

(async () => {
  await connection();
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running!");
  });
})();
