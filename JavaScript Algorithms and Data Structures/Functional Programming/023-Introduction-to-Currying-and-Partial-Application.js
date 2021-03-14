function add(x) {
    // Only change code below this line

    return y => z => x + y + z;

    /**
     *  function(x)  {
     *      return function(y) {
     *          return function(z) {
     *              return x + y + z;
     *          }
     *      }
     *  }
     * 
     *  add(10)(20)(30)
     *  const first = add(10)
     *  const second = first(20)
     *  const third = second(30)
     *  console.log(third)        --->> 60
     */

    // Only change code above this line
}
const result = add(10)(20)(30);
console.log(result);


// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application
