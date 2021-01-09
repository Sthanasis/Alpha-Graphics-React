export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules !== undefined && rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  return isValid;
};

export const checkIsLoggedIn = () => {
  return (
    localStorage.getItem("token") && localStorage.getItem("userId") === "123"
  );
};
