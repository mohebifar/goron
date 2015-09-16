const isEmpty = value => value === undefined || value === null || value === '';

export default value => {
  if (isEmpty(value)) {
    return 'Required';
  }
}