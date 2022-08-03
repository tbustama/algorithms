var topKFrequent = function (nums, k) {
  //     create hash map counting frequency of numbebrs
  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  }
  //     use array where index corresponds to the frequency and [values] are numbers of that frequency
  let freqArray = new Array(nums.length + 1).fill().map(() => {
    return new Array();
  });

  //    iterate over map and store values in array at proper index
  for (let [k, v] of map) {
    freqArray[v].push(k);
  }

  let finalArr = [];
  for (let i = nums.length; finalArr.length < k; i--) {
    if (freqArray[i]) {
      for (num of freqArray[i]) {
        finalArr.push(num);
      }
    }
  }
  return finalArr;
};
