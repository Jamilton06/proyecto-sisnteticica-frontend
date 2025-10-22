interface Authority {
    authority: string;
}

export class Usuario {
    id: Number;
    username: String;
    name: String;
    lastname: String;
    city: String;
    email: String;
    perfil: String;
    enabled: boolean;
    password: String;
    authorities: Authority[];  // Array de authorities como propiedad de instancia
}