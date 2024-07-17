const createArray = (length) => Array.from({ length }, (_, i) => i + 1);
const traits = [createArray(2), createArray(3), createArray(3)];
const scriptSrc = "./content/generate-ordinal.js";

const createAllTraitIndexes = () => {
  const recursive = (preceeding, idx) => {
    if (idx === traits.length) return preceeding;
    return traits[idx]
      .map((trait) => [...preceeding, trait])
      .map((newPreceeding) => recursive(newPreceeding, idx + 1))
      .flat();
  };

  return recursive([], 0).reduce((arr, cur, idx) => {
    if (idx % 3 === 0) arr.push([]);
    arr[arr.length - 1].push(cur);
    return arr;
  }, []);
};

const createScriptTags = (allTraitIndexes) =>
  allTraitIndexes.map(
    (traits, i) =>
      `<script id="${i + 1}" t="${traits.join(",")}" src="${scriptSrc}"></script>`
  );

console.log(createScriptTags(createAllTraitIndexes()));
