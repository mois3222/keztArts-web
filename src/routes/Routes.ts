import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Home from "../pages/Home";
import { FIs, HIs, HOIs } from "../interfaces/interfaces";

class Routes {
  private static instance: Routes;
  private $header: HTMLElement | null;
  private $footer: HTMLElement | null;
  private $Main: HTMLElement | null;
  private header: HIs;
  private footer: FIs;
  private home: Home;
  private routes;
  private constructor() {
    this.$header = document.querySelector("header");
    this.$footer = document.querySelector("footer");
    this.$Main = document.querySelector("main");
    this.header = new Header();
    this.footer = new Footer();
    this.home = new Home();
    this.routes = {};
  }

  static getInstance() {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }

    return Routes.instance;
  }

  renders() {
    this.$Main?.appendChild(this.home.render());
    this.$footer?.appendChild(this.footer.render());
    this.$header?.appendChild(this.header.render());
  }
}

export default Routes;
