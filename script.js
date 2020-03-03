// GIVEN
var example = "I'm the example!";
console.log(example);

let example = "I'm the example!";
console.log(example);

// 1.
var hello = "world";
console.log(hello);
// world

// 2.
var needle = "haystack";
function test() {
    var needle = "magnet";
    console.log(needle);
}
test();
// magnet

// 3.
var brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);
// super cool

// 4.
var food = "chicken";
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
console.log(food);
eat();
// chicken
// half-chicken

// 5.
mean();
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
};
console.log(food);
console.log(food);
// TypeError: mean is not a function

// 6.
var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();
console.log(genre);
// disco
// rock
// r&b
// disco

// 7.
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// san jose
// seattle
// burbank
// san jose

// 8.
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// { name: 'Chicago', students: 65, hiring: true }
// closed for now
