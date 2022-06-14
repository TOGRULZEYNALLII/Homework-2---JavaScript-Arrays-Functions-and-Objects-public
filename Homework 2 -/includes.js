function includes(arr=[],){
    element=0;
    if ((arr === undefined) || (arr.length === 0)){
        return false;
    }
    for (let elem of arr) {
        if (elem === element){
            isIncluded = true;
            break;
        }
    }

    return isIncluded;
}

