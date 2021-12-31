
export function getNextTableId(table){
    const ids = table.map(raw => raw.id).sort().reverse();
    if(ids.length > 0){
        return ids[0] +1;
    }
    else{
        return 1;
    }
}