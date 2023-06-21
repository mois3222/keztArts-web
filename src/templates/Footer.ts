import view from "../views/Footer.html";

class Footer {
  protected footerElement: HTMLElement;
  constructor() {
    this.footerElement = document.createElement("div");
  }

  render() {
    this.footerElement.className = "footer-container";
    this.footerElement.innerHTML = view;

    return this.footerElement;
  }
}

export default Footer;
