//1
function getElementsById(id) {

       let elements =  document.querySelectorAll(`#${id}`);
       let tmp = {};
       let result = [];

       elements.forEach(function(el){

           if(tmp.hasOwnProperty(el.tagName)) {
               return;
           }else{
               tmp[el.tagName] = el;
               result.push(el);
           };

        });

       return result;
};

console.log(getElementsById('test'));

//2
function whichMouseButtonPressed(event){

    switch (event.which){
        case 1:
            console.log("left mouse button");
            break;
        case 2:
            console.log("middle mouse button");
            break;
        case 3:
            console.log("right mouse button");
            break;
        default:
            console.log("Unnamed click");
    }
}

//3

function getElementsById1_Promise(id) {

    return new Promise(function (resolve, reject) {

        let elements = document.querySelectorAll(`#${id}`);
        let tmp = {};
        let result = [];

        setTimeout(function () {
            try {
                elements.forEach(function (el) {

                    if (tmp.hasOwnProperty(el.tagName)) {
                        return;
                    } else {
                        tmp[el.tagName] = el;
                        result.push(el);
                    };
                });
            } catch (e) {
                reject(e.type);
            }
            resolve(result);
        }, 1000);
    });
};

getElementsById1_Promise("test")
.then(res => console.log(res))
.catch(err => console.log(`Error: ${err}`));
