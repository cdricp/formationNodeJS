
var moment = require('moment')

exports.CalcLifeSpan = function(d1 = new Date(), d2 = new Date()) {
    var a = moment(d1);
    var b = moment(d2);
    return b.diff(a, 'years')
    //return 33; 
}