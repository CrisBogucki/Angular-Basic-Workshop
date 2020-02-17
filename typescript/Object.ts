
var obj = {
    key1: "value1", //scalar value
    key2: "value",
    key3: function() {
        //functions
    },
    key4:["content1", "content2"] //collection
};

//console.log(obj)


var person = {
    firstname:"Tom",
    lastname:"Hanks",
    age: 1
};

//console.log(person);
//console.log(JSON.stringify(person));

//console.log(person.firstname)
//console.log(person.lastname)
//console.log(person.age)


interface IPoint {
    x:number
    y:number
}

interface IPerson {
    firstname: string;
    lastname: string;
    age: number;
}

function addPoints(p1:IPoint,p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x,y:y}
}


let newPoint = addPoints({x:3,y:4},{x:5,y:1})
//console.log(newPoint)

let personNew: IPerson = { firstname:'Krzysztof', lastname:'Bogucki', age:18 };
//console.log(personNew);
//console.log(personNew.lastname);
//console.log(personNew.age);


let newPointFromJson: IPerson[] = JSON.parse("[{\"firstname\":\"Krzysztof\", \"lastname\":\"Bogucki\", \"age\":18}]");
console.log(newPointFromJson);

for(let i=0; i<newPointFromJson.length; i++) {3
    //console.log(newPointFromJson[i]);
    //console.log(newPointFromJson[i].lastname);
    //console.log(newPointFromJson[i].age);

}












