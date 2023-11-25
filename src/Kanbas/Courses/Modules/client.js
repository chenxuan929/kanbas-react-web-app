 import axios from "axios";
const COURSES_URL =
  "https://kanbas-node-server-app-zvjs.onrender.com/api/courses";

const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;


export const deleteModule = async (moduleId) => {
    try {
        const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting module:", error);
        throw error; // Re-throw the error to be caught by the calling code.
      }
};
export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};