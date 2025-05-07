const axios = require("axios");

const fetchCatFact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    return response.data.fact;
  } catch (error) {
    console.error("❌ Failed to fetch cat fact:", error.message);
    return "Cats are mysterious creatures!";
  }
};

module.exports = fetchCatFact;
