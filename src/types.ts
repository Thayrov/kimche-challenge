export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  image: string;
}

export interface CharactersPage {
  results: Character[];
  info: {
    count: number;
  };
}

export interface CharactersArgs {
  page?: number;
}
