function findGreatestDiffV1(nums) {
  let start = new Date().getTime();
  let greatestDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      if (diff > greatestDiff) greatestDiff = diff;
    }
  }
  console.log(((new Date().getTime() - start) / 1000.0) + " Seconds");
  return greatestDiff;
}

function findGreatestDiffV2(nums) {
  let start = new Date().getTime();
  let smallestNum = nums[0];
  let greatestDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallestNum) smallestNum = nums[i];
    if ((nums[i] - smallestNum) < greatestDiff) continue;
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      if (diff > greatestDiff) greatestDiff = diff;
    }
  }
  console.log(((new Date().getTime() - start) / 1000.0) + " Seconds");
  return greatestDiff;
}

function findGreatestDiffV1Time(nums) {
  let start = new Date().getTime();
  let greatestDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      if (diff > greatestDiff) greatestDiff = diff;
    }
  }
  return [((new Date().getTime() - start) / 1000.0), greatestDiff];
}

function findGreatestDiffV2Time(nums) {
  let start = new Date().getTime();
  let smallestNum = nums[0];
  let greatestDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallestNum) smallestNum = nums[i];
    if ((nums[i] - smallestNum) < greatestDiff) continue;
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      if (diff > greatestDiff) greatestDiff = diff;
    }
  }
  return [((new Date().getTime() - start) / 1000.0), greatestDiff];
}

function generateDiffs(numOfDiffs, maxDiff) {
  let diffs = [];
  for (let i = 0; i < numOfDiffs; i++) {
    diffs.push(Math.floor(Math.random() * maxDiff));
  }
  return diffs;
}

function runTimes(numOfDiffs, maxDiff) {
  let runTimeDiffs = generateDiffs(numOfDiffs, maxDiff)
  let timesV1 = 0;
  let timesV2 = 0;
  for (let x = 0; x < 10; x++) {
    let timeV1 = findGreatestDiffV1Time(runTimeDiffs)[0]
    let timeV2 = findGreatestDiffV2Time(runTimeDiffs)[0]
    timesV2 += timeV2;
    timesV1 += timeV1;
    console.log(`V1 time on run ${x}: ${timeV1}`)
    console.log(`V2 time on run ${x}: ${timeV2}`)
  }
  console.log(`V1 times for numOfDiffs = ${numOfDiffs} and maxDiff = ${maxDiff} was: ${timesV1 / 10} seconds.`)
  console.log(`V2 times for numOfDiffs = ${numOfDiffs} and maxDiff = ${maxDiff} was: ${timesV2 / 10} seconds.`)
}

