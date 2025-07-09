import { codingAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

codingAgent(
  "translate this readme for me by adding a second part in French please.",
)
  .then(console.log)
  .catch(console.error);