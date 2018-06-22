/**
 * Created by Red_I-O on 15.06.2018.
 */
const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}, undefined];

function tryToParseJSON(arr){

    return JSON.stringify(arr, (key, value) => {

            try{
                if(value === undefined){
                    throw new TypeError();
                };
                return value;
            }catch(e){
                return e.name;
            };
        });
};

setTimeout(function(){

    console.log(tryToParseJSON(array));

}, 5000);

