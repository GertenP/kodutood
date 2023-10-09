function summa() {
  const x = parseFloat(prompt("Esimene arv: "));
  const y = parseFloat(prompt("Teine arv: "));
  console.log(x + y);
}

function arvude_summa_array(list) {
  let summa = 0;
  for (let i = 0; i < list.length; i++) {
    summa += list[i];
  }
  return summa;
}

function arvude_summa_sõne(string) {
  let summa = 0;
  const nums = string.split(' ');
  for (let i = 0; i < nums.length; i++) {
    summa += parseInt(nums[i]);
  }
  console.log(summa);
}

function paaris_arvude_summa(string) {
  let summa = 0;
  const nums = string.split(' ');
  for (let i = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) % 2 !== 0) {
      summa += parseInt(nums[i]);
    }
  }
  console.log(summa);
}

function sekundid_teisendatud(sec) {
  console.log(`${sec} sekundit on ${Math.floor(sec / 60)} minutit`);
  console.log(`${sec} sekundit on ${Math.floor(sec / 3600)} tundi`);
  console.log(`${sec} sekundit on ${Math.floor(sec / 86400)} päeva`);
}

function aega_moodunud(sec) {
  console.log(`${sec} sekundit on ${Math.floor(sec / 86400)} päeva`);
  sec -= Math.floor(sec / 86400) * 86400;
  console.log(`${sec} sekundit on ${Math.floor(sec / 3600)} tundi`);
  sec -= Math.floor(sec / 3600) * 3600;
  console.log(`${sec} sekundit on ${Math.floor(sec / 60)} minutit`);
  sec -= Math.floor(sec / 60) * 60;
  console.log(`${sec} sekundit on ${sec} sekundi`);
}
