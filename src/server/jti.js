import jose from 'node-jose';
import fs from "fs-extra";
import {__basedir} from "./index";

const decryptionKeyPath = `jwt-test-keys/sdc-sr-authentication-encryption-private-v1.pem`;
const verifyKeyPath = `jwt-test-keys/sdc-rrm-authentication-signing-public-v1.pem`;

let decryptionKeyPromise, verifyKeyPromise;

const keystore = jose.JWK.createKeyStore();

const getDecryptionKey = () => {
    if (!decryptionKeyPromise) {
        decryptionKeyPromise = keystore.add(fs.readFileSync(`${__basedir}/${decryptionKeyPath}`), 'pem');
    }

    return decryptionKeyPromise;
}

const getVerifyKey = () => {
    if (!verifyKeyPromise) {
        verifyKeyPromise = keystore.add(fs.readFileSync(`${__basedir}/${verifyKeyPath}`), 'pem');
    }

    return verifyKeyPromise;
}

export function* validateToken (token) {
    const decryptionKey = yield getDecryptionKey();
    const verifyKey = yield getVerifyKey();

    const jwsBuffer = yield jose.JWE.createDecrypt(decryptionKey).decrypt(token);
    const encodedJwt = jwsBuffer.payload.toString('utf8')
    const jwtBuffer = yield jose.JWS.createVerify(verifyKey).verify(encodedJwt)

    return JSON.parse(jwtBuffer.payload.toString('utf8'));

}
