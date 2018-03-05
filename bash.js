const commands = require('./commands.js');

// Output a prompt
const prompt = '\nprompt > '
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  var cmd = data.toString().trim(); // remove the newline
  let cmdSplit = cmd.split(' ');
  let cmdActual = cmdSplit[0];
  let args = cmdSplit.slice(1);
  if (commands[cmdActual]) {
    commands[cmdActual](args, done);
  }
  else process.stdout.write('You typed: ' + cmd);


});

function done (output) {

  process.stdout.write(output + prompt);

}
