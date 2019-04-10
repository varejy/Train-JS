var olympicRing = (a) => {
    var rings = ['A', 'a', 'R', 'q', 'o', 'Q', 'O', 'p', 'P', 'g', 'b', 'd', 'D', 'e'];
    var twoRings = ['B'];
    var result = 0;

    a.split('').map(elm => rings.includes(elm) ? result++ : twoRings.includes(elm) ? result = result + 2 : elm);

    result = Math.floor(result / 2);

    return result <= 1 ? 'Not even a medal!' : result === 2 ? 'Bronze!' : result === 3 ? 'Silver!' : 'Gold!';

}