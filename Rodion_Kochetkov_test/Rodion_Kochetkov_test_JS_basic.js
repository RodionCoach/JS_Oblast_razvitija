//1
(function revese_number(num) {

	console.log(num.toString().split('').reverse());

})(32243);

//2
(function str_sort(str) {

	console.log(str.split('').sort((a, b) => a > b).join(''));

})('webmaster');

//3
function is_array(par) {

	return Array.isArray(par);
};
	
console.log(is_array('w3resource'));
console.log(is_array([]));

//4
function get_last_element(arr, num) {

	let arr_size =  arr.length - 1;
	return num > 0 ? arr.splice(num*(-1), num + 1) : arr[arr_size];
};
	
console.log(get_last_element([7,9,0,-2]));
console.log(get_last_element([7,9,0,-2], 3));
console.log(get_last_element([7,9,0,-2], 6));

//5
(function to_string(arr) {

	console.log(arr.join(', '));
})(["Red", "Green", "White", "Black", "Yellow"]);

//6
let student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12
};

(function obj_size(obj){

	let size = 0, key;
	for(key in obj){
		if(obj.hasOwnProperty(key)) size++;
	};

	console.log(size);
})(student);

//7
function string_parameterize(str) {

	return str.toLowerCase().split(' ').join('-');
}

console.log(string_parameterize("Robin Singh from USA"));
