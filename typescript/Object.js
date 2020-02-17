var obj = {
    key1: "value1",
    key2: "value",
    key3: function () {
        //functions
    },
    key4: ["content1", "content2"] //collection
};
//console.log(obj)
var person = {
    firstname: "Tom",
    lastname: "Hanks",
    age: 1
};
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
//console.log(newPoint)
var personNew = { firstname: 'Krzysztof', lastname: 'Bogucki', age: 18 };
//console.log(personNew);
//console.log(personNew.lastname);
//console.log(personNew.age);
var newPointFromJson = JSON.parse("[{\"firstname\":\"Krzysztof\", \"lastname\":\"Bogucki\", \"age\":18}]");
console.log(newPointFromJson);
for (var i = 0; i < newPointFromJson.length; i++) {
    console.log(newPointFromJson[i]);
    console.log(newPointFromJson[i].lastname);
    console.log(newPointFromJson[i].age);
}
