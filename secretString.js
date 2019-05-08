const recoverSecret = triplets => {
  //This is a dependency graph

  //My aproximation, was to transform the triplets in duplets
  //To verify if the duplets appears more than once
  let duplets = [];
  let response = '';

  triplets.forEach(triplet => {
    let str = triplet.join('');
    // console.log({ str });
    let d1 = str.substr(0, 2);
    // console.log({ d1 });
    let d2 = str.substr(1, 3);
    // console.log({ d2 });
    if (duplets.indexOf(d1) === -1) {
      duplets.push(d1);
    }
    if (duplets.indexOf(d2) === -1) {
      duplets.push(d2);
    }

    // console.log({ dupletsState: duplets });
  });

  let nextWord = findingNextWord(duplets);
  while (nextWord) {
    response += nextWord;
    duplets = duplets.filter(d => d.indexOf(nextWord) === -1);
    nextWord = findingNextWord(duplets);
  }

  return response;
};

// This function return the first letter of the secret
function findingNextWord(duplets) {
  let nextWord = duplets.find(d => duplets.every(_d => d[0] !== _d[1]));
  console.log({ nextWord });
  return duplets.length > 1 ? nextWord[0] : duplets[0];
}

// Let's Test the thing
secret_1 = 'whatisup';
triplets_1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
];

const recovered = recoverSecret(triplets_1);

if (secret_1 === recovered) {
  return console.log(`Success: The secret is ${recovered}`);
} else {
  return console.log('Try again, try harder');
}
