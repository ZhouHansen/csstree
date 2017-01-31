var TYPE = require('../../scanner').TYPE;

var NUMBER = TYPE.Number;
var PERCENTSIGN = TYPE.PercentSign;

module.exports = function Percentage() {
    var start = this.scanner.tokenStart;
    var number = this.scanner.getTokenValue();

    this.scanner.eat(NUMBER);
    this.scanner.eat(PERCENTSIGN);

    return {
        type: 'Percentage',
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: number
    };
};