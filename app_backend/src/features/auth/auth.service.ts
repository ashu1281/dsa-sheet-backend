import {
  createUser,
  findUserByEmail,
} from "./auth.repository";

import {
  comparePassword,
  hashPassword,
} from "../../utils/bcrypt";

import { generateToken } from "../../utils/jwt";

export const registerUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser =
    await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword =
    await hashPassword(password);

  const user = await createUser(
    name,
    email,
    hashedPassword
  );

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    user,
    token,
  };
};

export const loginUserService = async (
  email: string,
  password: string
) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatched =
    await comparePassword(
      password,
      user.password
    );

  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

export const findUserByEmailService = async (
  email: string,
) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email");
  }
  return {
    user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }
  };
};