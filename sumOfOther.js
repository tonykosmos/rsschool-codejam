function sumOfOther(arr = []){
    let a = 0;
    let b = 0;
    let newArr = [];
    const reducer = (a,b) => a+b;
    for (let i=0;i<arr.length;i++){
       sum = arr.reduce(reducer) - arr[i]
      newArr.push(sum);
    }
    return newArr;
    }