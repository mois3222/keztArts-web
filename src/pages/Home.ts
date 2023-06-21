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

    gameService.getGame.forEach((game) => {
      if (homeContainer) {
        homeContainer.innerHTML += `<div class="games" style="background-image: url(${game.image})">
        <a href="3" class="Home-link">
          <h3>${game.name}</h3>
        </a>
      </div>`;
      }
    });

    return this.sectionElement;
  }
}

export default Home;
