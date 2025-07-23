// testForceBruteLogin.js
import axios from "axios";

const testLoginBruteForce = async () => {
  const URL = "https://authapi-m7fc.onrender.com/api/auth/login";

  const payload = {
    email: "thomasdetraversay@gmail.com",
    password: "azerty64600"
  };

  for (let i = 1; i <= 1000000; i++) {
    try {
      const response = await axios.post(URL, payload, {
        withCredentials: true,
      });
      console.log(`Tentative ${i}:`, response.data.message);
    } catch (error) {
      if (error.response) {
        console.log(`Tentative ${i}:`, error.response.status, error.response.data.message);
      } else {
        console.error(`Tentative ${i}: Erreur inconnue`, error.message);
      }
    }
  }
};

testLoginBruteForce();