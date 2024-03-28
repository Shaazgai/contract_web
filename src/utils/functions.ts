export const checkEmail = (value: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(value);
};

export const checkPhone = (value: string): boolean => {
  const re = /^[0-9]{8}$/;
  return re.test(value);
};
export const checkRegisterNumber = (value: string): boolean => {
  const re = /^[A-Z]{2}[0-9]{8}$/;
  return re.test(value.toUpperCase());
};
export const checkUsername = (value: string): boolean => {
  const re = /^[A-Z]{6,}/;

  return re.test(value.toUpperCase());
};
