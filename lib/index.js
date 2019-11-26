function mdLinks() {
    const regex = /\((http[s]?:\/\/[^\)]*)\)/gm;
    const str = `
    Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read)
    90% dos dados que existem hoje foram gerados durante os últimos dois anos.
    Pega o link da [Laboratória](http://laboratoria.com/) banana.
    A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem
    precedentes.
    1. Antes de mais nada, se assegure de ter um bom :pencil: editor de texto, algo
    como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
    2. Para executar os comandos você precisará de um :shell: UNIX Shell, que é um
    programa que interpreta linhas de comando (command-line interpreter) e também
    deve ter o git instalado. Se você usa um sistema operacional "UNIX-like", como
    GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
    provavelmente o 
    git  também). Se você usa Windows você pode usar o [Git
    bash](https://git-scm.com/download/win), embora seja recomendado que você
    teste :penguin: GNU/Linux.
    3. Faça seu próprio :fork_and_knife:
    [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
    _mentores_ compartilharão com você um _link_ para um repositório privado e te
    darão acesso a este repositório.
    `;
    
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