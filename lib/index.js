function mdLinks() {
    // const str = 'banana maça uva framboesa https://www.google.com/ melão e muito mais https://www.laboratoria.la/'
    // const regex = /http[s]?:\/\/([^\/\n]*)/g
    // const result = regex.exec(str)//regex.test(str) //regex.exec(str)
    // console.log(result)

    
    const regex = /http[s]?:\/\/([^\/\n]*)/g;
    const str = `banana maça uva https://www.google.com/ banana https://www.laboratoria.la/ framboesa melão e muito mais http://tecnoz.com`;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
}

mdLinks()

// module.exports = mdLinks