const decode = [
    "A","B","C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U","V","W","X","Y","Z",
];

const shifter = (character) => {
    let place = decode.indexOf(character) + 13;

    if (place > decode.length - 1) {
        place = place - decode.length;
    }
    return place;
};

const rot13 = (str) => {
    const arr = str.toUpperCase().split("");
    const cipherString = [];
    for (let i = 0; i < arr.length; i++) {
        if (decode.indexOf(arr[i]) < 0) {
            cipherString.push(arr[i]);
        } else {
            cipherString.push(decode[shifter(arr[i])]);
        }
    }
    return cipherString.join("");
};

console.log(rot13("SERR PBQR PNZC"));
