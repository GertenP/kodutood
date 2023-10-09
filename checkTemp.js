function checkTemp(temp){
  if (temp <= 20 && temp >= 0){
    return -1}
  else if (temp > 21 && temp <= 40){
    return 0}
  else if (temp > 40 && temp <= 60){
    return 1}
}
