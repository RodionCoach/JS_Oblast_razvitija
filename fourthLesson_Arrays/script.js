//1
const isInArray = (arr, el) => (arr.indexOf(el) != -1) ? true : false;

//2
const modifyArr = (arr, el, newEl) => {

    let index = arr.indexOf(el);
    if(index != -1){
        arr.splice(index, 1, newEl);
        return arr;
    }
    return `element ${el} not found in array [${arr}]`;
}

//3
const transformString = (str, el, newEl) => {

    let reg = new RegExp (`${el}`, "ig");

    if(!!str.match(reg)){
        return str.replace(el, newEl, "ig"); //заменяет только первое найденное совпадение, так как стоит флаг g, i не обращает внимание на регистр строки
    }
    return `element ${el} not found in string "${str}"`;
}