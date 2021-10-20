import clipboard from 'clipboardy';

let clipContent = clipboard.readSync();

const replacements = [
    {
        id: 'remove-apple-books-citation',
        match: /^“(.+)”\n\nExcerpt From:.+\. Apple Books\. $/gs,
        replacement: '$1'
    }
]

replacements.forEach(repl=>{
    console.log(`Applying ${repl.id}`);
    console.log('\nBEFORE');
    console.log(clipContent);
    clipContent = clipContent.replace(repl.match,repl.replacement);
    console.log('\nAFTER');
    console.log(clipContent);
});

clipboard.writeSync(clipContent);