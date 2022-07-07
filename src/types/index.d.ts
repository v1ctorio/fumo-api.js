export interface Fumo {
    _id: string;
    URL: string;
    fumos: string[] | null;
    caption: string | null;
}

export class FumoClient {
    constructor(data:{endpoint: string});
    public specific(id: string): Promise<Fumo>;
    public all(): Promise<Fumo[]>;
    public random(): Promise<Fumo>;
}