const fs = require('fs');


module.exports = {
  pwd: function () {
    let arr = process.argv[1].split('/').slice(0,-1).join('/');

    process.stdout.write(arr);
    process.stdout.write('\nprompt > ');

  },
  date: function () {
    let date = new Date;
    
    process.stdout.write(date.toString());
    process.stdout.write('\nprompt > ');

  },
  cat: function (file) {
    let prefix = process.argv[1].split('/').slice(0,-1).join('/');
    
    fs.readFile(prefix+'/'+file[0], (err, data) => {
      if (err) throw err;

      process.stdout.write(data);

    });
    process.stdout.write('\nprompt > ');

  },
  head: function (file) {
    let prefix = process.argv[1].split('/').slice(0,-1).join('/');
    fs.readFile(prefix+'/'+file[0], 'utf-8', (err, data) => {
      if (err) throw err;

      let output = data.toString();
      console.log(output);
      // let newArr= Array.prototype.slice.call(data);
      // let output = newArr.join(' ').split(/\b(10)\b/g);
      // output = output.slice(0,11).join('');
      
      // console.log(JSON.stringify(data, null, 5));
    
      // process.stdout.write(output.toString());

    });
    process.stdout.write('\nprompt > ');

  },
  echo: function (arg) {
    let possibleArg = arg[0][0];
    let output;
    switch (possibleArg) {
      case '$': 
        if (arg[0] === '$') output = arg.join(' ');
        let envirVar = arg[0].slice(1);
        output = process.env[envirVar];
        break;

      case '-':
        break;
      default: output = arg.join(' ');

    }
    
    
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');

  },
  ls: function () {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('\nprompt > ');
    });

  },
}


  // if (cmd === 'pwd') {
  //   let arr = process.argv[1].split('/').slice(0,-1).join('/');

  //   process.stdout.write(arr);
  // }
  // else if (cmd === 'date') {
  //   let date = new Date;
    
  //   process.stdout.write(date.toString());

  // }

  // else {

  // }