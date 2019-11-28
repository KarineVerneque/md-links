const mdLinks = require("../index.js");

const leticia = [
  {text: "learnyounode", href: "https://github.com/workshopper/learnyounode"},
  {text: "how-to-npm", href: "https://github.com/workshopper/how-to-npm"},
  {text: "promise-it-wont-hurt", href: "https://github.com/stevekane/promise-it-wont-hurt"}
]

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  })
  it("Should return leticia", (done) => {
    mdLinks("./lib/__tests__/testinho.md").then(result => {
      expect(result).toEqual(leticia)
      done()
    })
  })
  it("Should return an error", (done) => {
    mdLinks("./lib/__tests__/testinh.md").catch(result => {
      expect(result).toEqual("ta errado essa bagaça Error: ENOENT: no such file or directory, open './lib/__tests__/testinh.md'")
      done()
    })
  })  
});
