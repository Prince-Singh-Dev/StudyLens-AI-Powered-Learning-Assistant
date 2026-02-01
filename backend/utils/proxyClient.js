import axios from "axios";
import dotenv from "dotenv";
dotenv.config(); // Load .env

const PROXY_BASE_URL = process.env.PROXY_BASE_URL;

// Fetch all documents from a collection
export const fetchCollection = async (collectionName) => {
  try {
    const res = await axios.get(`${PROXY_BASE_URL}/api/${collectionName}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching data from proxy:", err.message);
    return [];
  }
};

// Insert a new document
export const insertDocument = async (collectionName, doc) => {
  try {
    const res = await axios.post(`${PROXY_BASE_URL}/api/${collectionName}`, doc);
    return res.data;
  } catch (err) {
    console.error("Error inserting document:", err.message);
    return null;
  }
};
