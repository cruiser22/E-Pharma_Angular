import { Categorie } from './categorie';

export class Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
  categorie: Categorie;
  version: number;
}
