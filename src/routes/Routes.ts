import Header from "../templates/Header";

class Routes {
  constructor() {}

  static renders() {
    const $header = document.querySelector("header");
    const header = new Header();
    return $header?.appendChild(header.render());
  }
}

export default Routes;
