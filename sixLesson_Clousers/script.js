const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}, undefined];

function tryToParseJSON(arr){

	let result = [];

	for(let i of arr ){

	result.push(JSON.stringify(i, function(key, value){

				try{
					if(value === undefined){
						throw new TypeError();
					};
					return value;
				}catch(e){
					return e.name + e.message;
				};

				})
			);
	};

	return result;
};

setTimeout(function(){

	console.log(tryToParseJSON(array));

}, 5000);