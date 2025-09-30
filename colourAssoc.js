function colourAssociation(array){
    let obj={}
for(i=0;i<array.length;i++){
        obj={}
        obj[array[i][0]]=array[i][1]
        array[i]=obj
        console.log(obj)
}
    return array
}

const array=[["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]];
   
let obj={}
for(i=0;i<array.length;i++){
        obj={}
        obj[array[i][0]]=array[i][1]
        array[i]=obj
        console.log(obj)
}
console.log(array)