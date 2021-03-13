let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line

const glideMixin = (obj) => {
    obj.glide = () => {
        console.log('Gliding, Yay!');
    }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects
