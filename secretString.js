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
  // console.log({ nextWord });
  while (nextWord) {
    response += nextWord;
    // console.log({ responseInWhile: response });
    duplets = duplets.filter(d => d.indexOf(nextWord) === -1);
    // console.log({ dupletsInWhile: duplets });
    nextWord = findingNextWord(duplets);
    // console.log({ nextWordInWhile: nextWord });
  }

  return response;
};

// This function return the first letter of the secret
findingNextWord = duplets => {
  // Testing the value to return the tested value with  the function every
  // The method find will return the value tested with the next word of the secret
  let nextWord = duplets.find(duplet_1 =>
    duplets.every(duplet_2 => duplet_1[0] !== duplet_2[1])
  );
  // console.log({ nextWordInfunction: nextWord });
  return duplets.length > 1 ? nextWord[0] : duplets[0];
};

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
