import axios from "axios";

export const getProfiles = async () => {
  const response = await axios.get(
    "https://randomuser.me/api/?results=10"
  );

  return response.data.results;
};

export default getProfiles;