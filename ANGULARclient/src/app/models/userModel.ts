// Exporter une interface pour typer un objet
export interface UserModel {
    username: string,
    password: string,
    passwordVerif?: string,
    completeName?: string,
    about?: string
}