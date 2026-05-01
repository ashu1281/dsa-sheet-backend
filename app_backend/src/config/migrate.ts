import { exec } from "child_process";

export const runMigrations = () => {
  return new Promise((resolve, reject) => {
    exec("npm run migrate:up", { env: process.env }, (error, stdout, stderr) => {
      if (error) {
        console.error("Migration error:", stderr || error.message);
        return reject(error);
      }

      console.log(stdout);
      resolve(true);
    });
  });
};