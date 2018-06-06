//https://docs.google.com/document/d/1LiXCifUtoB1Kfil-s0uYspgRUj5pLRvVrem8bXbRWRc/edit
//1 avverage value
const mid = (...args) => {

	let result = 0;
	for(let i = 0; i < args.length; i++){
		result += args[i];
	}

	return (result/args.length);
};

console.log(mid(2,10));

//2 exponentiation with memoization
const memoize = (fn) => {
  let cache = new Map();
  return (...args) => {
    // cache.set(`${args[0]} : ${args[1]}`, 0);
    if (cache.has(`${args[0]} : ${args[1]}`)) {
      console.log('Fetching from cache', cache.get(`${args[0]} : ${args[1]}`));
      return cache.get(`${args[0]} : ${args[1]}`);
    }else{
      console.log('Calculating result');
      console.log(cache);
      let result = fn(args[0], args[1]);
      cache.set(`${args[0]} : ${args[1]}`, result);
      return result;
    }
  }
};

const pow = memoize((...args) => {

    if(args[1] == 1){
    	return args[0];
    }else{
    	return args[0]*pow(args[0], args[1]-1);
	}
});

console.log(pow(3, 4));

//3 if - switch
const questionFunc = () => {

	let a = +prompt('a?', '');

	switch(a){
		case 0:
			alert(0);
			break;
		case 1:
			alert(1);
			break;
		case 2:
			alert('2,3');
			break;
		case 3:
			alert('2,3');
			break;
		default:
			return false;
	};
};

questionFunc();

//4 with iterator
let obj = {
	from: null,
	to: null,
	[Symbol.iterator](){		
		return this;
	},
	next(){
		if (this.current == undefined){
			this.current = this.from;
		}
		if (this.current <= this.to){
			return {
				done: false,
				value: this.current++
			};
		}else{
			delete this.current;
			return {
				done: true
			}
		}
	}
};

const for_of = (a ,b) => {

	let odd = [];
	obj.from = a;
	obj.to = b;

	for (let n of obj){
		if(n%2 != 0 && n%2 != -0){
			odd.push(n);
		}
	}
	
	return odd;
};

const loopWhile = (a, b) => {

	obj.from = a;
	obj.to = b;
	let arr = [...obj];
	let i = 0;

	while(i <= obj.to){

		if(arr[i]%2 == 0 && arr[i]%2 == -0){
			arr.splice(i, 1);
			i++;
		}else{
			i++;
		}
	}

	return arr;

};

const loopDoWhile = (a, b) => {

	obj.from = a;
	obj.to = b;
	let arr = [...obj];
	let i = 0;

	do{
		if(arr[i]%2 == 0 && arr[i]%2 == -0){
			arr.splice(i, 1);
			i++;
		}else{
			i++;
		}		
	}while(i <= obj.to);

	return arr;
};

const loopFor = (a, b) => {

	obj.from = a;
	obj.to = b;
	let arr = [...obj];
	let i = 0;

	for(; i <= obj.to; i++){
		if(arr[i]%2 == 0 && arr[i]%2 == -0){
			arr.splice(i, 1);	
		}	
	}

	return arr;
};

console.log(for_of(2, 100));
console.log(loopWhile(2, 100));
console.log(loopDoWhile(2, 100));
console.log(loopFor(2, 100));