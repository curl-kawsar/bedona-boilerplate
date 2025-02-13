import axios from 'axios'

//API er base URL
const api = axios.create({
  baseURL: "http://localhost:3000/api",
})

// Auth related shob API call
export const authService = {
  // Login er jonno API call
  login: async (credentials) => { // credentials = {email, password}
    try {
      
      const response = await api.post('/auth/login', credentials)// POST request pathano hocche
      return response.data// API response theke data return kora hocche
    } catch (error) {// Jodi kono error ashe taile error message dekhabe
      
      throw new Error(error.response?.data?.message || "Login failed")// API theke error message ashe kina check kore message dekhano hocche
    }
  },

  // Registration er jonno API call
  register: async (userData) => { // userData = {name, email, password}
    try {
      const response = await api.post('/auth/register', userData)// POST request pathano hocche
      return response.data// API response theke data return kora hocche
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed")// Jodi kono error ashe taile error message dekhabe
    }
  },

  // User er profile info ber korar jonno API call
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me')// GET request pathano hocche
      return response.data// API response theke data return kora hocche
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch user data")// Kono error hole null return kora hocche
    }
  },

  // Password reset er jonno API call
  forgotPassword: async (email) => {
    try {
      const response = await api.post('/auth/forgot-password', { email })// POST request pathano hocche
      return response.data// API response theke data return kora hocche
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset request failed")// Kono error hole null return kora hocche
    }
  },

  // Reset password confirm korar jonno API call
  resetPassword: async (token, newPassword) => {
    try {
      const response = await api.post('/auth/reset-password', {
        token,
        newPassword
      })// POST request pathano hocche
      return response.data// API response theke data return kora hocche
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset failed")// Kono error hole null return kora hocche
    }
  }
} 