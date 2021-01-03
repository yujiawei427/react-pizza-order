export const isNotEmpty = (value) => !!value;

export const isRegexp = (value, regexp) => regexp.test(value);

export const isContact = (value) => isRegexp(value, /^04\d{8}$/);

export const isPostcode = (value) => isRegexp(value, /^\d{4}$/);

const Email_REGEXP = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\-\\]+)@&([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\-\\]+)\.([a-zA-Z]{2,5})$/;
export const isEmail = (value) => isRegexp(value, Email_REGEXP);

export const isIdentical = (value, target) => value === target;