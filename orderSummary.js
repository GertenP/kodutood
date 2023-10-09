function countCode(tellimus){
    let kogusumma = 0
    for (let i = 0; i < tellimus["rows"].length; i++){
        console.log(tellimus["rows"][i]["name"])
        console.log(tellimus["rows"][i]["amount"])
        console.log(tellimus["rows"][i]["price"])
        kogusumma += tellimus["rows"][i]["price"]
    }
    console.log("Kogusumma:", kogusumma * 1.2)
    
}
