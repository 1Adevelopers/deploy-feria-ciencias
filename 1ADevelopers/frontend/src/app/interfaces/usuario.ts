export interface Usuario {
    id?: number;
    username: string;
    email: string;
    password: string;
    perfil: 'Docente' | 'Administrador';
}
