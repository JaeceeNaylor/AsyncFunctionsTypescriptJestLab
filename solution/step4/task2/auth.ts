export interface UserProfile {
  username: string;
  email: string;
}

export async function login(username: string, password: string): Promise<string> {
  if (username === "admin" && password === "password") {
    return Promise.resolve("mock-token");
  }
  return Promise.reject(new Error("Invalid credentials"));
}

export async function getUserProfile(token: string): Promise<UserProfile> {
  if (token !== "mock-token") {
    throw new Error("Invalid token");
  }

  return {
    username: "admin",
    email: "admin@example.com",
  };
}

export async function authenticateAndFetchProfile(
  username: string,
  password: string
): Promise<UserProfile> {
  return Promise.reject(new Error("Not implemented"));
}
