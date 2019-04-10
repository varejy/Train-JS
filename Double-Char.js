function doubleChar(str) {
    var strSpl = str.split("");
    for (var i = 0; i < strSpl.length; i++) {
        var result = strSpl.map(function (n) { return n + n; })
        return result.join('');
    }
}