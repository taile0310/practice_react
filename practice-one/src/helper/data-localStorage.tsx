export const getListCart = () => {
  return JSON.parse(localStorage.getItem("CartProducts") || "[]");
};
