export default min => {
  return value => {
    if (value < min) {
      return `It should be greater than ${min}`;
    }
  }
}