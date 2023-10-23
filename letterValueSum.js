function lettersum(sisend){
    tahestik = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
    summa = 0
    for(let i = 0; i < sisend.length; i++){
        summa += tahestik.indexOf(sisend[i]) + 1}
    return summa
}
