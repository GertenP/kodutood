function balanced(sõne) {
  const xLugemine = (sõne.match(/x/g) || []).length;
  const yLugemine = (sõne.match(/y/g) || []).length;
  return xLugemine === yLugemine;
}
