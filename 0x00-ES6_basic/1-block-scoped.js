export default function taskBlock(trueOrFalse) {
  var task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    var task2 = false;
  }

  return [task, task2];
}
