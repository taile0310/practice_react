// Method get list cart in local storage
export const getListCart = () => {
  return JSON.parse(localStorage.getItem("CartProducts") || "[]");
};
