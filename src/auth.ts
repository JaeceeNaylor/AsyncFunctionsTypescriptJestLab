export interface UserProfile {
  username: string;
  email: string;
}

export async function login(username: string, password: string): Promise<string> {
  return Promise.reject(new Error("Not implemented"));
}

export async function getUserProfile(token: string): Promise<UserProfile> {
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
