const arrowFunc = function(arr) {
return arr.map((el)=>{
    return String.fromCharCode(el);
}).join('');
}
console.log(arrowFunc([97,97,99,100]))