const apiKey = process.env.MWAPI_KEY;

const dictionaryWord = async (arg) => {
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${arg}?key=${apiKey}`);
    const dicData = await response.json();
    const word = dicData[0];
    console.log(word.shortdef[0]);
    const wordDef = word.shortdef[0];
    return wordDef
} 