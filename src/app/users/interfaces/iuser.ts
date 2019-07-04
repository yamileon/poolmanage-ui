export interface Iuser {
    fname: string,
    lname: string,
    _id: string,
    _v: number
}

export class User implements Iuser{
    fname: string;    
    lname: string;
    _id: string;
    _v: number;
}
