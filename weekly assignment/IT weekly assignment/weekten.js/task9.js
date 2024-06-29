var array = [1, 2, 3, 4, 5, 6];

// Initialize variables for sum (s) and product (p)
var s = 0;
var p = 1;


for (var i = 0; i < array.length; i += 1) {
  s += array[i];

  p *= array[i];
}

// Output the calculated sum and product
console.log('Sum : ' + s + ' Product :  ' + p); 
