function convertHTML(str) {
    const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }
    return str.replace(/(&|<|"|'|>)/g, match => entities[match]);
    // return str.replace(/[&<"'>]/g, match => entities[match]);        --->> /[group_the_symbols]/
}

const result = convertHTML("Do<l>c\"e & Ga'bbana");
console.log(result);

// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
