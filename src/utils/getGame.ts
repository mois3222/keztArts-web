import GameService from "../services/game.service";

const gameService = GameService.getInstance();

gameService.getGame();
gameService.addGame({
  name: "Mini Switcher",
  image: "imgs/miniswitcher-back.jpg",
  url: "https://html5.gamemonetize.com/r822rwum14259b7wacvt1acbp3e4jv4a/",
  completed: true,
});

gameService.update(9, {
  name: "hsjhdasd",
});

gameService.filterGames(gameService.arrGames, "id", 12);
