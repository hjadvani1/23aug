import { message, setmsg } from "./User.js";
import {sum} from "./User.js"
import U,{printAge,printName}from "./User.js";
import U1, { Page, Pname } from "./User1.js"




console.log(message);
sum(5,5);

const user = new U('luffy',19)
console.log(user);
printAge(user)
printName(user
    )

    const user1 = new U1("Gojo", 23)
    console.log(user1);
    Pname(user1)
    Page(user1)
