// Breaking up an array into size
function chunkArrayInGroups(arr, size) {
    // Break it up.
    let result = [];
    while(arr.length){
        result.push(arr.splice(0,size));
    } 
   console.log(result); 
        }
        
        
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
