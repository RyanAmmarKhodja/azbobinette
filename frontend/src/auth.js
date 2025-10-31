import api from "./api";

export async function login(email, password) {
  try {
    const response = await api.post("/login", { email, password });
    const token = response.data.token;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await api.post("/logout");
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  } catch (error) {
    throw error;
  }
}

export async function fetchCurrentUser() {
  const res = await api.get('/user');
  return res.data;
}
