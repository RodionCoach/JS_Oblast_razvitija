//1 самые быстрые способы, так как splice и map едленные операции
const middleAgeBySex_1 = (infoArray, sex) => {

    let i = 0, age = 0;
    infoArray.forEach((el) => {

        if(el.sex == sex){
            age += el.age;
            i++;
        }else{
            return;
        }
    });

    return age/i;
}

const middleAgeBySex_2 = (infoArray, sex) => {

    let age = 0;
    let newArr = infoArray.filter((el, i, arr) => {

        if(el.sex == sex){
        return age += el.age;
    }else{
        return false;
    }
});
    return age/newArr.length;
}

const infoAboutPersons = [{
    name: `Ivan`,
    sex: `M`,
    age: 21
},
    {
        name: `Olga`,
        sex: `W`,
        age: 19
    },
    {
        name: `Oleg`,
        sex: `M`,
        age: 27
    },
    {
        name: `Ann`,
        sex: `W`,
        age: 21
    },
    {
        name: `Alex`,
        sex: `M`,
        age: 30
    },
];

console.log(middleAgeBySex_2(infoAboutPersons, `M`));
