var i = 110;
console.log('Init variable i = ' + i);
for (var i = 0; i < 1; i++) {
    console.log('For variable i = ' + i);
}
console.log('After for variable i = ' + i);
if (i > 0) {
    var i = 200;
    console.log('Init in if variable i = ' + i);
}
console.log('After init if variable i = ' + i);
