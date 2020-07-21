import { Album } from "./Album";
export class User {
  private album: Album[];
  constructor(
    private id: number,
    private userName: string,
    private firstName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }

  removeAlbum(album: Album): Album | undefined {
    //buscar album
    const index = this.album.findIndex((a) => a.id === album.id);
    let deleteAlbum;

    if (index >= 0) {
      deleteAlbum = this.album[index];
      this.album.splice(index, 1);
    }

    return deleteAlbum;
  }
}
