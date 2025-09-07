import { login, getUserProfile, authenticateAndFetchProfile } from "../src/auth";

describe("Authentication Flow", () => {
  test("successful login returns a token", async () => {
    await expect(login("admin", "password")).resolves.toBe("mock-token");
  });

  test("failed login rejects with error", async () => {
    await expect(login("wrong", "creds")).rejects.toThrow("Invalid credentials");
  });

  test("getUserProfile with valid token returns profile", async () => {
    await expect(getUserProfile("mock-token")).resolves.toEqual({
      username: "admin",
      email: "admin@example.com",
    });
  });

  test("getUserProfile with invalid token throws error", async () => {
    await expect(getUserProfile("bad-token")).rejects.toThrow("Invalid token");
  });
});