import "./styles/main.scss";
import Routes from "./routes/Routes";

const routes = Routes.getInstance();

window.addEventListener("load", () => {
  routes.renders();
});
console.log("working..");
