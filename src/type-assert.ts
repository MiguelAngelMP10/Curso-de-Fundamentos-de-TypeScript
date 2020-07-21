export {};

//<type> // Angle Bracket syntax
let username: any;
username = "Miguel";

// Tenemos un string, Complidor de TS confia en mí:
let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : `username is too short`;

console.log("Message ->", message);

let usernameWithId: any = "Miguel 1";
// Como obtener el username?

usernameWithId = (<string>usernameWithId).substring(0, 9);
console.log("username only", usernameWithId);

// Sintaxis 'as'
usernameWithId =
  (username as string).length > 5
    ? `Welcome ${username}`
    : `username is too short`;
console.log("username ->", username);

let helloUser: any;
helloUser = "Hello Coder";
username = (helloUser as string).substring(6);
console.log("username", username);
