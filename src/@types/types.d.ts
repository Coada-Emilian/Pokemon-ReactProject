export interface IPokemon {
  atk: number;
  atk_spe: number;
  createdAt?: Date;
  updatedAt?: Date;
  def: number;
  def_spe: number;
  description: string;
  devolution_id?: number | undefined;
  evolution_id?: number | undefined;
  hp: number;
  id: number;
  name: string;
  speed: number;
  teams?: ITeam[];
  types: IType[];
}

export interface ITeam {
  author_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  description: string;
  id: number;
  name: string;
  pokemon_has_team: IPokemonHasTeam;
}

export interface IPokemonHasTeam {
  createdAt?: Date;
  updatedAt?: Date;
  pokemon_id: number;
  team_id: number;
}

export interface IType {
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
  id: number;
  name: string;
  pokemon_has_type: IPokemonHasType;
}

export interface IPokemonHasType {
  createdAt?: Date;
  updatedAt?: Date;
  pokemon_id: number;
  type_id: number;
}
