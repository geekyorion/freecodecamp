// import json data and file system module
const json = require('./data');
const fs = require('fs');

// fetch all of the edges
const probs = json.allChallengeNode.edges;

/**
 * Note: use node to create file(s)
 * run "node index.js"
 * it will create the files in the same folder
 */

let count = 0;
for (let i = 0; i < probs.length; i++) {
    if (probs[i].node.block == "redux") {

        // Fetch the title
        let title = probs[i].node.title;
        // split title into words array and join using "-"
        title = title.split(" ").join("-");
        // calculate the number of zeros as per the value of count
        title = `${count < 10 ? "00" + count : count < 100 ? "0" + count : count}-${title}.js`;

        // don't add the space as it can cause extra space
        const data = `\n\n// link: https://www.freecodecamp.org${probs[i].node.fields.slug}\n`;

        // use writeFile to write and save file in the same folder (uses relative path)
        fs.writeFile(title, data, (err) => {
            if (err) throw err;
        });

        count++;
    }
}
