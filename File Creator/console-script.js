// since freecodecamp changed the n/w response, we need to extract the data from DOM
// so that we can create the files through node command
// THIS SCRIPT NEED TO BE EXECUTED IN THE BROWSER CONSOLE

// NOTE: expand all the section and count the section for which we need the data [limit variable]

// to add as a prefix before links
const rootPath = location.origin;
const limit = 3;        // section in the course [including project section]

// extracts the nodes
const headers = document.getElementsByClassName('big-block-title');
const ULnodes = document.getElementsByClassName('map-challenges-ul');

const data = {};

// create the data
for (let i = 0; i < limit; i++) {
    let title = headers[i].textContent;
    // to remove last # from the title
    title = title.substr(0, title.length - 1);

    const liNodes = ULnodes[i].getElementsByTagName('li');
    const questionsData = [];

    for (let li of liNodes) {
        const slug = li.getAttribute('id');
        const childElement = li.firstChild;
        const link = rootPath.concat(childElement.getAttribute('href'));
        let name = childElement.textContent;
        for (let node of childElement.childNodes) {
            if (node.nodeName === '#text') {
                name = node.textContent;
            }
        }

        questionsData.push({ name, slug, link });
    }

    data[title] = questionsData;
}

// copy function is available in the browser's console to copy the data
copy(data);
