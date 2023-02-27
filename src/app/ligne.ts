import { Commande } from './commande';
import { Produit } from './produit';

export class Ligne {
  id: number;
  produit: Produit;
  quantite: number;
  total?: number;
  version: number;
}
