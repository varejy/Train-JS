const apparently = (str) => {
    var words = ["but", "and"];
    
    return str
    .split(" ")
    .map((word, index, string) => words.includes(word) && string[index + 1] !== "apparently" ? `${word} apparently` : word)
    .join(" ");
}