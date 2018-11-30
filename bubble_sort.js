function bubbleSort(arr) {

  var len = arr.length;

    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
      // console.log(arr[i][j])
      // console.log(arr[j])
      // console.log(arr[j + 1])
        if (arr[j] < arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
      }
    } 
  } return arr;
    
};

console.log(bubbleSort(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));