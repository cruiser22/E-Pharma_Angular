import { Client } from './client';
import { Ligne } from './ligne';

export class Commande {
  id?: number;
  lignes: Array<Ligne>;
  prixTotal: number;
  client: Client;
  date: Date;
  version: number;
}
