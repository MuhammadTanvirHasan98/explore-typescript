// let num1= 5;
function printId(id) {
    // console.log(id.toUpperCase());// it will give error bcz this id can be number also. So we have to handle this by logically
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(23);
printId('muhammad3196');
