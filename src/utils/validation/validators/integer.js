export default value => {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
}