function iv(num) {
  if (num == 1) {
    return 5;
  } else if ( num == 2) {
    return 7;
  }
  return iv(num - 1) * iv(num - 2);
}

console.log(iv(8));
