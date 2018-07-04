/**
 * Created by Red_I-O on 21.06.2018.
 */
//1.1

const mul_first = arg1 => arg2 => arg3 => arg4 => arg1*arg2*arg3*arg4;

//1.2

let mul = function(){

    if (arguments[0] === ""){
      let temp = mul.value;
      mul.value = 1;
      return temp;
    }
    mul.value*= arguments[0];
    return function(){
        return mul(arguments[0]);
    };
};

mul.value = 1;

console.log(mul(3)(4)(5)(""));

//1.3
function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

//-----------------------------------------------------------------------------------------------------------------------
// 2

const sumStringArgs = function(){

	let Result = {};
	Result.count = 0;
	Result.errStrings = [];

	for(let i = 0; i < arguments.length; i++){
		if(parseFloat(arguments[i])){
			Result.count += parseFloat(arguments[i]);
		}else{
			Result.errStrings.push(arguments[i]);
		}
	}

	return JSON.stringify(Result);
}