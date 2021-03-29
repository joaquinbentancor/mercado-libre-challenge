import dotenv from "dotenv";

dotenv.config();

export default {
  api: {
    endpoint: process.env.MERCADO_LIBRE_API_URL,
  },
  port: process.env.PORT,
};
