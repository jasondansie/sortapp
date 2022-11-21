function bubbleSort(arr){
   
    let i, j; 
    let  isSwapped = false;

    const len = arr.length;
     
    for(i =0; i < len; i++){
       
      isSwapped = false;
       
      for(j = 0; j < len; j++){
          if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
          }
      }
       
      // IF no two elements were swapped by inner loop, then break    
      if(!isSwapped){
        break;
      }
    }

    return arr;
  }

  export default bubbleSort