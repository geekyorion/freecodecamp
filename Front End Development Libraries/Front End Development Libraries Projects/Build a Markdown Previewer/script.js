const projectName = 'markdown-previewer';

marked.setOptions({
    breaks: true
});

const markdownInitialText = `
# This is H1
## This is H2
### This is H3
#### This is H4 and so

**Strong text** or *italicized text* your choice


> Wow a blockquote - it is just check the markup


do you like the organised way
1. First add this
2. Then this
3. This is the last one

or non orgranised way
- I don't
- like
- numbers

<br />

\`console.log('Finally I can write Hello World!');\`

<br />
Or use tags here, who cares
<br /><br />

but but but always a but
we will write a function to print hello world

\`\`\`\


function printHelloWorld(sayHelloTo='World') {
    console.log('Hello' + sayHelloTo);
}


\`\`\`

I guess I need a horizontal line (rule or whatever)
_______________________________________________

and I can put a link to my profile [GeekyOrion](https://github.com/geekyorion) with picture
but you need to read alt text  ![altText: It is my picture :P](whoCares.jpg)

any many more things, We both really don't care but still if you made till the end, give yourself a break &lt;br /&gt; by using setOptions
`;
