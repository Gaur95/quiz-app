import axios from "axios";

export const submitScore = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/score/create",
      data,
      { withCredentials: true }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getScore = async (pin) => {
  try {
    const response = await axios.get(`http://localhost:3000/score/${pin}`, {
      withCredentials: true,
    });
    console.log(response);
    return response.data.scores;
  } catch (error) {
    console.log(error);
  }
};
