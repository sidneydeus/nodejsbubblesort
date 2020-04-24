// TODO: Implement the bubble sort algorithm
function bubbleSort(array) {
  if (!Array.isArray(array)) {
    array = array.split(",");
    array = array.map(Number);
  }
  let swap;
  let size = array.length - 1;
  do {
    swap = false;
    for (let i = 0; i < size; i++) {
      if (array[i] > array[i + 1]) {
        let n = array[i];
        array[i] = array[i + 1];
        array[i + 1] = n;
        swap = true;
      }
    }
    size--;
  } while (swap);
  return array;
}

module.exports = bubbleSort;
