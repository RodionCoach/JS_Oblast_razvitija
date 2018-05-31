/**
 * Created by Red_I-O on 26.05.2018.
 */
//перобразование к примитиву, не оборачивает в объект
let foo = 10;

Boolean(foo);
String(foo);
Number("sd45");

let x = 0; //глобалка, конечно же будет определено в цикле

for(; x < 5; x++){
    console.log("true");
}
