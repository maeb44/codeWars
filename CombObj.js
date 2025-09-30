function combine(...obj) {
    const objCopy = JSON.parse(JSON.stringify(obj));
    return objCopy.reduce((acc,obj)=>{
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                acc[key]=(acc[key]||0)+obj[key]
            }

        }
        return acc;
    }
    )
}

 const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC= { a: 3, c: 6, d: 3 };

console.log(combine(objA,objB))
console.log(objA)
console.log(combine(objA,objC))