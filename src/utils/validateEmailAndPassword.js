export const validateEmailAndPassword = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  if (!isEmailValid) return "Please Enter Valid Email";

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  if (!isPasswordValid) return "Password is not strong.";

  return null;
};
