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

//3
const checkingComb = (str, comb) => {

	let reg = new RegExp (`${comb}`, "ig");

	return !!(str.match(reg));
};
