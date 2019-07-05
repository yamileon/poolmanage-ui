export interface IUser {

    id:Number,
    player1name: String,
    player2name:  String,
    gameRules: Number

}

export class User implements IUser{
    id:Number  
    player1name: String;
    player2name: String;
    gameRules: Number;

    
}
