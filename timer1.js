//Alarm that's gonna beep after a specified amount of time.
//Edge cases: no numbers provided, a negative number, NaN.

const args = process.argv.slice(2);
const sortedArgs = args.sort(function(a, b) { //Sort the numbers in an ascending order.
  return a - b;
});

for (let arg of sortedArgs) {
  if (arg >= 0 && !isNaN(arg)) { //Edge cases.
    setTimeout(() => {
      process.stdout.write(`${arg} seconds! Here it comes! \x07 \n`);
    }, arg * 1000);
  }
}