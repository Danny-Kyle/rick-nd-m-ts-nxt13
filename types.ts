export interface GetCharacterResults {
    info: Info;
    results: Character[]
}

export interface Info{
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface Character{
    id: number;
    name: string;
    status: Status;
    species: Species; 
    type: string;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export enum Gender{
    Female = "Female",
    Male = "Male",
    Unknown = "Unknown",
}

export enum Status{
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "Unknown",
}
export enum Species{
    Alien = "Alien",
    Human = "Human",
}
export interface Location{
    name: string;
    url: string;
}

