import { Client } from "./client";
import { Ligne } from "./ligne";

export class Commande {
    lignes: Array<Ligne>;
    prixTotal: number;
    client: Client;
    version: number;
}
