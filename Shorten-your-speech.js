var shortenSpeech = (str) => {
    return str.split(' ').map((word) => word.length > 3 ?(word = word.match(/^.{3}[^aeiou]*/), word[0] == word.input? word[0] : word[0]+'.') : word).join(' ');
}