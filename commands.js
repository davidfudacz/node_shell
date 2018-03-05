const fs = require('fs');


module.exports = {
  pwd: function (file, done) {
    done(process.cwd());

  },
  date: function (file, done) {
    done(Date());
  },
  cat: function (file, done) {
    fs.readFile(file[0],'utf-8', (err, data) => {
      if (err) throw err;
      done(data)
    });
  },
  head: function (file, done) {
    fs.readFile(file[0], 'utf-8', (err, data) => {
      if (err) throw err;
      done(data.split('\n').slice(0,5).join('\n'));
    });

  },
  tail(file, done) {
    fs.readFile(file[0], 'utf-8', (err, data) => {
      if (err) throw err;
      done(data.split('\n').slice(-5).join('\n'));
    });
  },
  echo: function (args, done) {

    let output = args
    .map(arg => {
        if (arg[0] === '$') {
          let envirVar = arg.slice(1);
          let output = process.env[envirVar];
          return output;
        } else {
          return arg;
        }
      })
    .join(' ');

    done(output);
  },
  ls: function (file, done) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('\nprompt > ');
    });

  },
}


