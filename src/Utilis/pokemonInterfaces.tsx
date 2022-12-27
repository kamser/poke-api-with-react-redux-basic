export interface PokemonStat{
    stat: Stat;
    effort: number;
    baseStat: number;
}


export interface Move{
    id: number;
    name: string;
    accuracy: number;
    effectChance: number;
    pp: number;
    priority: number;
    power: number;
    contestCombos: any;
    contestType: any;
    contestEffect: any;
    damageClass: any;
    effectEntries: Array<any>;
    effectChanges: Array<any>;
    learnedByPokemon: Array<Pokemon>;
    flavorTestEntries: Array<any>;
    generation: Generation;
    machines: Array<any>;
    meta: any;
    names: Array<Name>;
    pastValues: Array<any>;
    statChanges: Array<any>;
    superContestEffect: any;
    target: any;
    type: Type;
}

export interface PokemonMove{
    move: Move;
    versionGroupDetails: Array<PokemonMoveVersion>;
}

export interface PokemonMoveVersion{
    moveLearnMethod: MoveLearnMethod;
    versionGroup: VersionGroup;
    levelLearnedAt: number;
}



export interface MoveStatAffect{
    change: number;
    move: Array<any>;
}

export interface MoveStatAffectSets{
    increase: Array<MoveStatAffect>;
    decrease: Array<MoveStatAffect>;
}

export interface NatureStatAffectSets{
    increase: Array<any>;
    decrease: Array<any>;
}

export interface TypePokemon{
    slot: number;
    pokemon: Pokemon;
}

export interface Type{
    id: number;
    name: string;
    damageRelations: any;
    pastDamageRelations: Array<any>;
    gameIndices: Array<any>;
    moveDamageClass: any;
    names: Array<Name>;
    pokemon: Array<TypePokemon>;
    moves: Array<any>;
}

export interface PokemonType{
    slot: number;
    type: Type;
}

export interface Stat{
    id: number;
    name: string;
    gameIndex: number;
    isBattleOnly: boolean;
    affectingMoves: any;
    affectingNatures: any;
    characteristics: Array<any>;
    moveDemageClass: any;
    names: Array<Name>;
}

export interface PokemonSpeciesDexEntry{
    entryNumber: number;
    pokedex: Pokedex;
}

export interface PalParkEnconunterArea{
    baseScore: number;
    rate: number;
    area: any;
}

export interface PokemonSpeciesVariety{
    isDefault: boolean;
    pokemon: Pokemon;
}

export interface Genus{
    ganus: string;
    language: Language
}

export interface PokemonSpecies{
    id: number;
    name: string;
    order: number;
    genderRate: number;
    captureRate: number;
    baseHappiness: number;
    isBaby: boolean;
    isLegendary: boolean;
    isMythical: boolean;
    hatchCounter: number;
    hasGenderDifferences: boolean;
    formsSwitchable: boolean;
    growthRate: any;
    pokedexNumbers: Array<any>;
    eggGroups: Array<any>;
    color: any;
    shape: any;
    evolvesFromSpecies: PokemonSpecies;
    evolutionChain: any;
    habitat: any;
    generation: Generation;
    names: Array<Name>;
    palParkEncounters: Array<any>;
    flavorTextEntries: Array<any>;
    formDescription: Array<Desciption>;
    genera: Array<any>; 
    varieties: Array<any>;
}

export interface PokemonEntry{
    entryNumber: number;
    pokemonSpecies: any;
}

export interface Version{
    id: number;
    name: string;
    names: Array<Name>;
    versionGroup: VersionGroup;
}

export interface Desciption{
    description: string;
    language: Language;
}

export interface MoveLearnMethod{
    id: number;
    name: string;
    descriptions: Array<Desciption>;
    names: Array<Name>;
    versionGroups: Array<VersionGroup>;
}

export interface VersionGroup{
    id: number;
    name: string;
    order: number;
    generation: Generation;
    moveLearnMethods: Array<any>;
    pokedexes: Array<Pokedex>;
    region: Array<Region>;
    version: Array<any>;
}
export interface Pokedex{
    id: number;
    name: string;
    isMainSeries: boolean;
    descriptions: Array<Desciption>;
    names: Array<Name>;
    pokemonEntries: Array<any>;
    region: any;
    versionGroup: Array<VersionGroup>;
}

export interface Region{
    id: number;
    locations: Array<any>;
    name: string;
    names: Array<Name>;
    mainGeneration: Generation;
    pokedexes: Array<Pokedex>;
    versionGroups: Array<VersionGroup>;
}
export interface Language{
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Array<Name>
}

export interface Name{
    name: string;
    language: Language;
}

export interface Generation{
    id: number;
    name: string;
    abilities: Array<Ability>;
    names: Array<Name>;
    mainRegion: any;
    moves: Array<any>;
    pokemonSpecies: Array<any>;
    types: Array<any>;
    versionGroups: Array<VersionGroup>;
}

export interface AbilityPokemon{
    isHidden: boolean;
    slot: number;
    pokemon: Pokemon;
}

export interface Ability{
    id: number;
    name: string;
    isMainSeries: boolean;
    generation: Generation;
    names: Array<Name>;
    effectEntries: Array<any>;
    effectChanges: Array<any>;
    flavorTextEntries: Array<any>;
    pokemon: Array<any>;
}

export interface PokemonForm{
    id: number;
    name: string;
    order: number;
    formOrder: number;
    isDefault: boolean;
    isBattleOnly: boolean;
    isMega: boolean;
    formName: string;
    pokemon: Pokemon;
    types: any;
    sprites: any;
    versionGroup: VersionGroup;
    names: Array<Name>;
    formNames: Array<Name>;
}

export interface PokemonAbility{
    isHidden: boolean;
    slot: number;
    ability: Ability;
}

export interface PokemonSprites {
    front_default: string;
    frontShiny: string;
    frontFemale: string;
    frontShinyFemale: string;
    backDefault: string;
    backShiny: string;
    backFemale: string;
    backShinyFemale: string;
}

export interface PokemonTypePast{
    generation: Generation;
    types: Array<PokemonType>;
}

export interface VersionGameIndex{
    gameIndex: number;
    version: Version;
}

export interface Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
    abillities: PokemonAbility;
    forms: PokemonForm;
    gameIndices: VersionGameIndex;
    heldItems: Array<any>;
    locationAreaEncounters: string;
    moves: Array<PokemonMove>;
    pastTypes: Array<PokemonTypePast>;
    sprites: PokemonSprites;
    species: PokemonSpecies;
    stats: Array<PokemonStat>;
    types: Array<PokemonType>;
}


export interface BasicPokemonData{
    id: number;
    name: string;
    species: PokemonSpecies;
    sprites: PokemonSprites;
}