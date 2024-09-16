const StringUtils = {
  isValidEmail: (txt: string) => {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(txt);
  },
  isValidPassword: (txt: string) => {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    return regex.test(txt);
  },
};

export default StringUtils;
