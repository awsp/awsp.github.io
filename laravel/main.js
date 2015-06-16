var markdown = require('markdown').markdown;
var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which documentation would you like to convert? ', function (answer) {
  var i = 0;
  var currentDir = __dirname + '/docs/' + answer + '/src/';
  var targetDir = currentDir + '../target/';
  var layout = '';

  if (fs.existsSync(currentDir)) {
    // Create directory if it doesn't exist.
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }

    fs.readdir(currentDir, function (err, list) {
      list.forEach(function (file) {
        console.log("Processing " + currentDir + file);
        fs.readFile(currentDir + file, "utf8", function (err, data) {
          if (data) {
            var html = markdown.toHTML(data);
            fs.writeFile(targetDir + file + '.html', html, function (err) {

            });
          }
        });

        if (++i === list.length) {
          done();
        }
      });
    });

    function done() {
      console.log('Done');

      // TODO: generate index.html and its layout
      // To be implemented.

      // Close readline
      rl.close();
    }
  }
  else {
    console.log("folder does not exist. Exiting ...");
    process.exit(1);
  }

});
