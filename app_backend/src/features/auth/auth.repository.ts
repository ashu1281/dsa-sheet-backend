import pool from "../../config/db";

export const findUserByEmail = async (
  email: string
) => {
  const query = `
    SELECT *
    FROM users
    WHERE email = $1
  `;

  const { rows } = await pool.query(query, [email]);

  return rows[0];
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const query = `
    INSERT INTO users (
      name,
      email,
      password
    )
    VALUES ($1, $2, $3)
    RETURNING id, name, email, role
  `;

  const { rows } = await pool.query(query, [
    name,
    email,
    password,
  ]);

  return rows[0];
};

export const findUserById = async (
  id: string
) => {
  const query = `
    SELECT id, name, email, role
    FROM users
    WHERE id = $1
  `;

  const { rows } = await pool.query(query, [id]);

  return rows[0];
};