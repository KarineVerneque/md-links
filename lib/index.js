function mdLinks() {
    const regex = /\((http[s]?:\/\/[^\)]*)\)/gm;
    const str = `Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read)
    90% dos dados que existem hoje foram gerados durante os últimos dois anos.
    Pega o link da [Laboratória](http://laboratoria.com/) banana.
    A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem
    precedentes.`;
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