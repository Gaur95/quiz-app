import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return response.user;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
};

export async function getCurrentUser() {
  try {
    const response = await axios.get("http://localhost:3000/user/", {
      withCredentials: true,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function logout() {
  try {
    await axios.post(
      "http://localhost:3000/user/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function register(data) {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/register",
      data,
      { withCredentials: true }
    );

    return response.data.message;
  } catch (error) {
    console.log(error);
    throw error.response.data.error;
  }
}
