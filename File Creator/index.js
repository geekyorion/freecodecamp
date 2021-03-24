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
    if (probs[i].node.block == "bootstrap") {

        // Fetch the title
        let title = probs[i].node.title;
        // split title into words array and join using "-"
        title = title.split(" ").join("-");
        // calculate the number of zeros as per the value of count
        title = `${count < 10 ? "00" + count : count < 100 ? "0" + count : count}-${title}.html`;

        // don't add the space as it can cause extra space
        const data = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FCC - Front End Development Libraries - Boostrap</title>
    <link rel="stylesheet" href="./../assets/bootstrap-v5/css/bootstrap.min.css">
</head>
<body>

    <script src="./../assets/bootstrap-v5/js/bootstrap.min.js"></script>
</body>
</html>

<!-- link: https://www.freecodecamp.org${probs[i].node.fields.slug}
For the live view, please visit the below link
https://geekyorion.github.io/freecodecamp/Front End Development Libraries/Bootstrap/${title} -->
`;

        // use writeFile to write and save file in the same folder (uses relative path)
        fs.writeFile(title, data, (err) => {
            if (err) throw err;
        });

        count++;
    }
}
