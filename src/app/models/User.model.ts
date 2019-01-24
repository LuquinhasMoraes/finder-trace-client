export class User {
    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(usuario: any) {
        this.id = usuario.id;
        this.name = usuario.name;
        this.email = usuario.email;
        this.password = usuario.password;
    }
}