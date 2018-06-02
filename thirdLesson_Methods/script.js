/**
 * Created by Red_I-O on 31.05.2018.
 */
//1
const cout = (str) => str.length;

//2

const pow = (x, n) => {

	if(n == 1){
    	return x;
    }else{
    	return x*pow(x, n-1);
	}
};

const powX = (x, n) => {

	x = Math.round(x);
	n = Math.round(n);

	return pow(x, n);
};

//art 2 with clouser
function powX (x, n){

    x = Math.round(x);
    n = Math.round(n);

    return function pow (x, n){
        console.log (x, n);
        if(n === 1){
            return x;
        }else{
            return x*pow(x, n-1);
        }
    };
};

const newPow = powX ();

console.log(newPow(3, 4));

//3
const checkingComb = (str, comb) => {

	let reg = new RegExp (`${comb}`, "ig");

	return !!(str.match(reg));
};
