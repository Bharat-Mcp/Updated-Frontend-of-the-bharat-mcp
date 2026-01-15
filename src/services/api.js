import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Schedule a meeting
export const scheduleMeeting = async (bookingData) => {
  try {
    const response = await api.post('/booking/schedule', bookingData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to schedule meeting' };
  }
};

// Get available time slots
export const getAvailableSlots = async (date) => {
  try {
    const response = await api.get('/booking/available-slots', {
      params: { date }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch slots' };
  }
};

export default api;