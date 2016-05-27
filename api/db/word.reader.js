var fs = require('fs');

function wordsBox() {
    this.words = {};
}

wordsBox.prototype.getRandomWords = function () {
    var i = Math.floor(Math.random() * this.words.length);
    var counter = 0;
    for (var prop in this.words) {
        if (counter == i) {
            return {
                prop: prop,
                words: this.words[prop],
                word : this.words[prop][Math.floor(Math.random() * this.words[prop].length)]
            }
        }
        counter++;
    }
    return {};
};

var w = new wordsBox();

fs.readFile('words.txt', function (err, data) {
    w.words = JSON.parse(data.toString());
});

module.exports = w;

