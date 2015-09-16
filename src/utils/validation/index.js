const join = (rules) => value => rules.map(rule => rule(value)).filter(error => !!error)[0];

export function createValidator(rules) {
  return (data) => {
    const errors = {valid: true};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key]));
      const error = rule(data[key]);
      if (error) {
        errors[key] = error;
        errors.valid = false;
      }
    });
    return errors;
  };
}