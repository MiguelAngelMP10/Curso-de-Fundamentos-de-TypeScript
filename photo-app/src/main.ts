import { User } from "./User";
import { Album } from "./Album";
import { Picture } from "./Picture";
import { PhotoOrientation } from "./photo-orientation";

//import { User, Album, Picture, PhotoOrientation } from "./photo-app";
const user = new User(1, "Miguel Angel", "Migue", true);
const album = new Album(10, "Platzi Pictures");
const picture = new Picture(
  1,
  "TypeScript course",
  "2020-03",
  PhotoOrientation.Landscape
);

//creamos relaciones

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);

user.removeAlbum(album);

console.log("user", user);
