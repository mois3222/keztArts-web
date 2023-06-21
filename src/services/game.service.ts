import {
  IGame,
  CreateGame,
  UpdateGame,
  FindGame,
} from "../interfaces/interfaces";

class GameService {
  private static instace: GameService | null;
  protected games: IGame[] = [];
  private constructor() {}

  static getInstance() {
    if (!GameService.instace) {
      GameService.instace = new GameService();
    }

    return GameService.instace;
  }
  get getGame(): IGame[] {
    return this.games;
  }

  addGame(data: CreateGame) {
    const newData = {
      id: Math.random(),
      createAt: new Date(),
      ...data,
    };
    this.games.push(newData);
    return data;
  }

  update(id: number, changes: UpdateGame) {
    const index = this.games.findIndex((item) => item.id === id);
    if (!this.games[index]) return console.log(index, "not found");
    this.games[index] = {
      ...this.games[index],
      ...changes,
    };

    return this.games[index];
  }

  filterGames<T extends object>(
    arr: T[],
    property: keyof T,
    value: T[keyof T]
  ): T[] {
    return arr.filter((obj) => obj[property] === value);
  }
}

export default GameService;
