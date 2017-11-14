import {IUser} from "../Interfaces/IUser";

export class User implements IUser {
    id: number;
    username: string;
    apiKeyId: string;
    secretKey: string;

    constructor(id: number, username: string, apiKeyId: string, secretKey: string) {
        this.id = id;
        this.username = username;
        this.apiKeyId = apiKeyId;
        this.secretKey = secretKey;
    }
}