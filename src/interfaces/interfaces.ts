import Header from "../templates/Header";
import Footer from "../templates/Footer";

export interface IGame {
  id: number;
  name: string;
  image: string;
  url: string;
  createAt: Date;
  completed: boolean;
}

export type HIs = InstanceType<typeof Header>;
export type FIs = InstanceType<typeof Footer>;
export type CreateGame = Omit<IGame, "id" | "createAt">;
export interface UpdateGame extends Omit<Partial<IGame>, "id"> {}
export interface FindGame extends Readonly<Partial<IGame>> {}
