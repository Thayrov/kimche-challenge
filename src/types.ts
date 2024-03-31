export interface Character {
  id: string;
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
