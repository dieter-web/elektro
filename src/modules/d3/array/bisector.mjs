import { bisector, bisect, ticks } from "d3-array";

function mbisector() {
  let cents = ticks(0, 10, 50);
  console.log(cents);

  let index = bisect(cents, Math.PI);
  console.log(index);

  let aindex = [cents[index - 1], cents[index]];
  console.log(aindex);

  // let data = [
  //   { date: new Date(2023, 16, 6), value: 0.5 },
  //   { date: new Date(2023, 17, 6), value: 0.6 },
  //   { date: new Date(2023, 18, 6), value: 0.7 },
  //   { date: new Date(2023, 19, 6), value: 0.8 }
  // ]

  // let bisectDate = bisector(function (d) {
  //   return d.date
  // }).right

  // console.log(bisectDate())
}

export { mbisector };
