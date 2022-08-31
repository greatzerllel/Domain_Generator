var pronoun = ["the", "our", "to", "Their"];
var adj = ["great", "big", "most", "better"];
var noun = ["jogger", "racoon", "feel", "port", "chacha", "nopor", "planet"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(`${pronoun[p]}${adj[a]}${noun[n]}.com`);
    }
  }
}

/* const randomPro = () => Math.floor(Math.random() * pron); */
