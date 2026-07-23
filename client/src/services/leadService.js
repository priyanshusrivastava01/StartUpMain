import API from './api';

/**
 * Submit lead form inquiry
 * @param {Object} leadData
 * @returns {Promise<Object>} API response data
 */
export const createLeadInquiry = async (leadData) => {
  try {
    const response = await API.post('/leads', leadData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw {
      success: false,
      message: error.message || 'Network error. Please check your internet connection.',
    };
  }
};
