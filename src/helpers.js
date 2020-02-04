function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function remove(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      return arr.length;
    }
  }
}

export {choice, remove};
