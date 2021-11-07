/**
 * NOTE: THE CODE IS CHANGED DUE TO THE CHANGE IN N/W RESPONSE OF FCC
 * IT WORKS WITH console-script.js FILE
 */

// import json data and file system module
const json = require('./data');
const fs = require('fs');

const courseName = 'Data Visualization';
const key = 'JSON APIs and AJAX';

// fetch all of the edges
const probs = json[key];

// create the directory with the same name as key
fs.mkdirSync(key, (err) => { if (err) throw err; });

/**
 * Note: use node to create file(s)
 * run "node index.js"
 * it will create the files in the same folder
 */

let count = 0;
for (let i = 0; i < probs.length; i++) {

    // Fetch the title
    let title = probs[i].name;
    // split title into words array and join using "-"
    title = title.split(" ").join("-");
    // calculate the number of zeros as per the value of count
    title = `${count < 10 ? "00" + count : count < 100 ? "0" + count : count}-${title}.html`;

    // don't add the space as it can cause extra space
    const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FCC - ${courseName} - ${key}</title>
</head>
<body>
    <div id="root"></div>
    <script src="./../assets/d3.v7.min.js"></script>
</body>
</html>
<!-- link: ${probs[i].link}
For the live view, please visit the below link
https://geekyorion.github.io/freecodecamp/${courseName}/${key}/${title} -->
`;

    // use writeFile to write and save file in the same folder (uses relative path)
    fs.writeFileSync(`${key}/${title}`, data, (err) => {
        if (err) throw err;
    });

    count++;
}
