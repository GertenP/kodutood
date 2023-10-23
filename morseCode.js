function lettersum(sisend){
    morse_tahestik = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    tahestik = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
    summa = ""
    for(let i = 0; i < sisend.length; i++){
        summa += morse_tahestik[tahestik.indexOf(sisend[i])]}
    return summa
}
