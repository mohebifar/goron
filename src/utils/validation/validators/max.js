export default max => {
  return value => {
    if (value > max) {
      return `It should be less than ${max}`;
    }
  }
}