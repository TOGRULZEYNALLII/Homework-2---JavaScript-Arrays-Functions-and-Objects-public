function flat2D(...arrays) {
    let newArray = [];
    for(let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }
    return newArray;
}

