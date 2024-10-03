
export const setJsonList = (setKey:string, stringArr:string[]) => {
    localStorage.setItem(setKey, JSON.stringify(stringArr));
}


export const getJsonList = (getKey: string) => {
    const getListStr = localStorage.getItem(getKey);
    if (!getListStr) 
        return [];
    
    return new Set(JSON.parse(getListStr));
}
