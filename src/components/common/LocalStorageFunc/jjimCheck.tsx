import { JJIM_HOSPI_LIST, JJIM_POST_LIST } from "../../../GlobalVariable"
import { getJsonList, setJsonList } from "./listAndJson"

export const jjimCheck = (id:string) => {

    const lists = getJsonList(JJIM_HOSPI_LIST);

    if (!lists || lists.length == 0) {
        setJsonList(JJIM_HOSPI_LIST, []);
        return false;
    }
    const idSet = new Set(lists);
    return idSet.has(id);
}

export const heartCheck = (id:number) => {

    const lists = getJsonList(JJIM_POST_LIST);

    if (!lists || lists.length == 0) {
        setJsonList(JJIM_HOSPI_LIST, []);
        return false;
    }
    const idSet = new Set(lists);
    return idSet.has(id);
}