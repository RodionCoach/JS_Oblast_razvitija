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

//2

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