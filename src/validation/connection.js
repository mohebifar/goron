import {createValidator} from './../utils/validation';
import {required, ip, integer, max, min} from './../utils/validation/validators'

const validation = createValidator({
  name: [required],
  host: [required, ip],
  port: [required, integer, min(1), max(65000)]
});

export default validation;