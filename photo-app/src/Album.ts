import { Item } from "./Item";
import { Picture } from "./Picture";
export class Album extends Item {
  picture: Picture[];

  constructor(id: number, title: string) {
    super(id, title);
    this.picture = [];
  }

  addPicture(picture: Picture) {
    this.picture.push(picture);
  }
}
