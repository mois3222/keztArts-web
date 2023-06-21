import "./styles/main.scss";
import Routes from "./routes/Routes";
import { gameService } from "./utils/getGame";

const routes = Routes.getInstance();

window.addEventListener("load", () => {
  routes.renders();
  console.log(gameService.getGame);
});
console.log("working..");
