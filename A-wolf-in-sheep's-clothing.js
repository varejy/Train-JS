var warnTheSheep = (req) => req[req.length - 1] == "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${req.length - req.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`;
