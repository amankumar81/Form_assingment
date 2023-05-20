export const validateForm = (data) => {
  const errors = {};

  if (!data.firstname) {
    errors.firstname = "*First name is required";
  }

  if (!data.lastname) {
    errors.lastname = "*Last name is required";
  }

  if (!data.email) {
    errors.email = "*Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "*Email is invalid";
  }

  if (!data.username) {
    errors.username = "*Username is required";
  }

  if (!data.password) {
    errors.password = "*Password is required";
  } else if (data.password.length < 6) {
    errors.password = "*Password should be at least 6 characters long";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "*Confirm password is required";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "*Passwords do not match";
  }

  return errors;
};
