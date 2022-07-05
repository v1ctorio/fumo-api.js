export interface Fumo {
    _id: string;
    URL: string;
    fumos: string[] | null;
    caption: string | null;
}

export default class Client {
    constructor(data:{endpoint: string});
    public specific(id: string): Promise<Fumo>;
    public all(): Promise<Fumo[]>;
    public random(): Promise<Fumo>;
}