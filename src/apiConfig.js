const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_LISTING_API_KEY;

const ENDPOINTS = {
    GET_LISTING: (id) => `${API_BASE_URL}/${id}`,
    DELETE_LISTING: (id) => `${API_BASE_URL}/${id}`,
    UPDATE_LISTING: (id) => `${API_BASE_URL}/${id}`,
    UPLOAD_IMAGE: (id) => `${API_BASE_URL}/${id}/upload`,
}
export { API_BASE_URL, API_KEY, ENDPOINTS };
