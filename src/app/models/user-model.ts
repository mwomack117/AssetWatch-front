export class UserModel {

    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email:string;


    constructor(name:string, lastname:string, username:string, password:string, email : string){
        this.firstName=name;
        this.lastName=lastname;
        this.username=username;
        this.password=password;
        this.email=email;
    }
}
