const axios = require('axios');

const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const fetchCombinedData = async () => {
  try {
    const apiUrl1 = 'http://localhost:3000/api/bar-chart';
    const apiUrl2 = 'http://localhost:3000/api/pie-chart';
    const apiUrl3 = 'http://localhost:3000/api/statistics';

    const [api1Data, api2Data, api3Data] = await Promise.all([
      fetchDataFromApi(apiUrl1),
      fetchDataFromApi(apiUrl2),
      fetchDataFromApi(apiUrl3),
    ]);

    return { api1Data, api2Data, api3Data };
  } catch (error) {
    console.error('Error fetching combined data:', error);
    throw error;
  }
};

module.exports = {
  fetchCombinedData,
};
