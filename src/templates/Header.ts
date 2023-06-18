import view from "../views/Header.html";

class Header {
  protected navbarElement: HTMLElement;
  constructor() {
    this.navbarElement = document.createElement("nav");
  }

  render() {
    this.navbarElement.className = "navbar";
    this.navbarElement.innerHTML = view;
    return this.navbarElement;
  }
}

export default Header;
