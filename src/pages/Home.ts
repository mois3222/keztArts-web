import view from "../views/Home.html";
import { gameService } from "../utils/getGame";

class Home {
  protected sectionElement: HTMLElement;
  constructor() {
    this.sectionElement = document.createElement("section");
  }

  render() {
    this.sectionElement.className = "section-home";
    this.sectionElement.innerHTML = view;
    const homeContainer = this.sectionElement.querySelector(".home-container");

    gameService.getGame.forEach((item) => {
      if (homeContainer) {
        homeContainer.innerHTML += `<div>
        <a href="3" class="Home-link">
        <img src=${item.image}>
          <h3>${item.name}</h3>
        </a>
      </div>`;
      }
    });

    return this.sectionElement;
  }
}

export default Home;
