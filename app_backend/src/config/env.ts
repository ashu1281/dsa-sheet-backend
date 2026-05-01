import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",

  PORT: Number(process.env.PORT) || 8000,

  JWT_SECRET: process.env.JWT_SECRET || "",

  DATABASE_URL: process.env.DATABASE_URL || "",
};