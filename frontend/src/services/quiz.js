import axios from "axios";

export async function submitQuiz(data) {
  try {
    const response = await axios.post(
      `http://localhost:3000/quiz/addQuiz`,
      { data },
      { withCredentials: true }
    );

    return response.data.message;
  } catch (error) {
    console.log(error);
  }   
}

export async function getQuiz(pin) {
  try {
    const response = await axios.get(
      `http://localhost:3000/quiz/getQuiz/${pin}`
    );

    // console.log(response.data.data);
    return response.data.data.questionArray;
  } catch (error) {
    console.log(error);
  }
}

export async function checkQuiz(pin) {
  try {
    const response = await axios.get(`http://localhost:3000/quiz/check/${pin}`);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
