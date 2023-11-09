interface Pet {
    id?: number,
    name: string,
    image?: string,
    age: number,
    breed: string,
    color: string,
    weight: number
}


export class PetModel implements Pet {
    id?: number | undefined;
    name!: string;
    image?: string | undefined;
    age!: number;
    breed!: string;
    color!: string;
    weight!: number;
}