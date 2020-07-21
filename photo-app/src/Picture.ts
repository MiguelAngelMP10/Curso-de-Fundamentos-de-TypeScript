import { Item } from "./Item";
import { PhotoOrientation } from "./photo-orientation";
export class Picture extends Item {
  public constructor(
    id: number,
    title: string,
    private date: string,
    private orientation: PhotoOrientation
  ) {
    super(id, title);
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, 
                 title: ${this.title}, 
                 date: ${this.date},
                 orientation: ${this.orientation}]`;
  }
}
