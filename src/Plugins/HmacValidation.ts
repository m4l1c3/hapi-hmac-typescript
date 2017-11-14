import * as Hapi from "hapi";
import {IUser} from '../Interfaces/IUser';
import {User} from '../Entities/User';

export class HmacValidation {
    users: Array<IUser>;
    httpSignature: any;

    constructor(server: Hapi.Server) {
        this.users = new Array<IUser>();
        this.httpSignature = require('http-signature');
        this.users.push(new User(
            1,
            'test',
            '18KF2FGK6807ZQA945R2',
            '46573e78ce9df4f2d9ae93afd5f5c281'
        ));
    }

    validate(request: any, parsedSignature: any, callback: any) {
        let keyId = parsedSignature.keyId,
            credentials = {},
            secretKey;

        this.users.forEach((user, index) => {
            if(user.apiKeyId === keyId) {
                secretKey = user.secretKey;
                credentials = {id: user.id, username: user.username};
            }
        });

        if (!secretKey) {
            return callback(null, false);
        }

        if (this.httpSignature.verifyHMAC(parsedSignature, secretKey)) {
            callback(null, true, credentials);
        }

        callback(null, false);
    }
}