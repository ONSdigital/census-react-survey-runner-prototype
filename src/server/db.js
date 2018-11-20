import fs from "fs-extra";
import {__basedir} from "./index";

export function * putData(tableName, data, userId) {
    const fileName = `${__basedir}/data/${tableName}/${userId}`
    yield sleep(800);
    yield fs.writeFile(fileName, JSON.stringify(data));
}

export function * getData(tableName, userId) {
    const fileName = `${__basedir}/data/${tableName}/${userId}`
    try {
        return yield fs.readJSONSync(fileName);
    } catch (e) {
        return {};
    }
}

function *sleep(time) {
    yield new Promise(resolve => setTimeout(resolve, time));
}