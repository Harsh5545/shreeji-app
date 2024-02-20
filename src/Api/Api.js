import axios from "axios";

export const apiCall = async ({
  url,
  method = "GET",
  data = null,
  headers = {},
}) => {
  try {
    const config = {
      method: method.toUpperCase(),
      url: url,
    };

    if (data) {
      if (method.toUpperCase() === "GET") {
        config.params = data;
      } else {
        config.data = data;
      }
    }

    if (Object.keys(headers).length > 0) {
      config.headers = headers;
    }
    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error("Error making API call:", error);
    throw error;
  }
};
