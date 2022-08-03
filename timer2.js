//New timer:
/*
1- The user can press b and it should beep right away.
2- The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed.
3- The user can use ctrl + c to exit the program,
at which point the program should say "Thanks for using me, ciao!"
before terminating*/

const stdin = process.stdin;
//Setup work:
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (key > 0 && key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

  if (key === '\u0003') { // \u0003 maps to Ctrl + C input.
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});