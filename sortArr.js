function add(num1, num2) {
    arr1=Array.from(String(num1))
    arr2=Array.from(String(num2))

    length=Math.max(arr1.length,arr2.length)
    result=[]

    for(i=0;i<length;i++){
        if(arr1.length>arr2.length) arr2.unshift(0)
        if(arr2.length>arr1.length) arr1.unshift(0)
        result.push((+arr1[i])+(+arr2[i]))
    }
    return +result.join("")   
}
function add(num1, num2) {
arr1=Array.from(String(num1))
arr2=Array.from(String(num2))

length=Math.max(arr1.length,arr2.length)
result=[];
lengthOfFirst=arr1.length-1;
lengthOfSecond=arr2.length-1;

for(i=0;i<length;i++,lengthOfFirst--,lengthOfSecond--){
    result.push(((+arr1[lengthOfFirst])||0)+((+arr2[lengthOfSecond])||0))
}
    return +result.join("")   
}
function add(num1, num2) {
arr1=Array.from(String(num1)).reverse()
arr2=Array.from(String(num2)).reverse()
result=[]

for(i=0;i<Math.max(arr1.length,arr2.length);i++){ 
    result.push((+arr1[i]||0)+((+arr2[i])||0))
}
    return +result.reverse().join("")   
}

function add(a,b) {  //not mine
    let s = ""
    
    while(a+b) {
        s = a%10 + b%10 + s
        a = a/10|0
        b = b/10|0
    }
    
    return +s
}
num1=2;
num2=15;

arr1=Array.from(String(num1)).reverse()
arr2=Array.from(String(num2)).reverse()
result=[]

for(i=0;i<Math.max(arr1.length,arr2.length);i++){
    
    result.push((+arr1[i]||0)+((+arr2[i])||0))
}


console.log(+result.reverse().join("")  )