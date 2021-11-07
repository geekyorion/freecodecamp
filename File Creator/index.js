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
    <style>
        body {
            text-align: center;
            font-family: "Helvetica", sans-serif;
        }
        h1 {
            font-size: 2em;
            font-weight: bold;
        }
        .box {
            border-radius: 5px;
            background-color: #eee;
            padding: 20px 5px;
        }
        button {
            color: white;
            background-color: #4791d0;
            border-radius: 5px;
            border: 1px solid #4791d0;
            padding: 5px 10px 8px 10px;
        }
        button:hover {
            background-color: #0F5897;
            border: 1px solid #0F5897;
        }
    </style>
</head>
<body>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
        The message will go here
    </p>
    <p>
    <button id="getMessage">
        Get Message
    </button>
    </p>
    <script>
        document.addEventListener('DOMContentLoaded', () => {

        });
    </script>
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
