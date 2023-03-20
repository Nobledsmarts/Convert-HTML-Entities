function convertHTML(str) {
  const entities = {
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;",
    "'" : "&apos;",
    '"' : "&quot;",
  };
  let characters = /<|>|&|'|"/g;
  return str.replace(characters, (char) => entities[char]);
}

console.log(convertHTML("Dolce & Gabbana"));
