
var moment = require('moment')

exports.CalcLifeSpan = function(d1 = Date.now, d2 = Date.now) {
    var a = moment(d1);
    var b = moment(d2);
    return a.diff(b, 'years') 
}