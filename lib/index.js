const fs = require('fs');

function mdLinks(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err){
                reject(`ta errado essa bagaça ${err}`)
            } else {
                const str = data.toString();
                const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;

                let m;
                const arr = []
        
                while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                    arr.push({ text: m[1], href: m[2] })
                }
                resolve(arr)
            }
        })
    })
}

module.exports = mdLinks;
