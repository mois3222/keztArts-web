import Header from "../templates/Header";
import Footer from "../templates/Footer";

class Routes {
  private static instance: Routes;
  private $header: HTMLElement | null;
  private header: Header;

  private constructor() {
    this.$header = document.querySelector("header");
    this.header = new Header();
  }

  static getInstance() {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }

    return Routes.instance;
  }

  renders() {
    return this.$header?.appendChild(this.header.render());
  }
}

export default Routes;
