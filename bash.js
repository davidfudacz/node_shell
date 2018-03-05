// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === 'pwd') {
    let arr = process.argv[1].split('/').slice(0,-1).join('/');

    process.stdout.write(arr);
  }
  else if (cmd === 'date') {
    process.stdout.write(new Date);

  }

  else {
    process.stdout.write('You typed: ' + cmd);

  }
  
  process.stdout.write('\nprompt > ');

});