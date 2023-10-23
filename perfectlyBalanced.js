function balanced(s) {
  const xCount = (s.match(/x/g) || []).length;
  const yCount = (s.match(/y/g) || []).length;
  return xCount === yCount;
}
