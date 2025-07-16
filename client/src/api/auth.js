import api from "./axios";

export const login = async (credentials) => {
  try {
    const res = await api.post("token/", credentials);
    const token = res.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (err) {
    console.error("Login failed:", err.message);
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
export const getToken = () => localStorage.getItem("token");
export const isAuthenticated = () => !!getToken();
