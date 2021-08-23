

export let message = "hey im new here";
export function setmsg(msg) {
    message=msg;
}

function add(a,b){
    console.log(a+b);
}
export {add as sum}
class User 
{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
}
     export function printName(user) {
        console.log(`the pirate king ${user.name}`);
    }
     export function printAge(user) {
        console.log(user.age);
    }
export default User

