function same_necklace(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let kokku = 0;

    for (let i = 0; i < str1.length; i++) {
        let shiftedStr1 = str1.substring(i) + str1.substring(0, i);
        
        if (shiftedStr1 === str2) {
            return true;
        }
    }

    return kokku === str1.length;
}
