function union(...arrays) {
    let newArray = [];
    for(let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }
    if(newArray.indexOf(i) === -1) {
        newArray.push(i);
    }
    return newArray;
}
//alinmadi

