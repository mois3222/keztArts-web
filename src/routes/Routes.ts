import Header from "../templates/Header";
import Footer from "../templates/Footer";
import { FIs, HIs } from "../interfaces/interfaces";

class Routes {
  private static instance: Routes;
  private $header: HTMLElement | null;
  private $footer: HTMLElement | null;
  private header: HIs;
  private footer: FIs;
  private routes;
  private constructor() {
    this.$header = document.querySelector("header");
    this.$footer = document.querySelector("footer");
    this.header = new Header();
    this.footer = new Footer();
    this.routes = {};
  }

  static getInstance() {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }

    return Routes.instance;
  }

  renders() {
    this.$footer?.appendChild(this.footer.render());
    this.$header?.appendChild(this.header.render());
  }
}

export default Routes;
