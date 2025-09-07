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

  test("authenticateAndFetchProfile succeeds with correct credentials", async () => {
    const profile = await authenticateAndFetchProfile("admin", "password");
    expect(profile).toEqual({
      username: "admin",
      email: "admin@example.com",
    });
  });

  test("authenticateAndFetchProfile fails with wrong credentials", async () => {
    await expect(authenticateAndFetchProfile("user", "wrong")).rejects.toThrow(
      "Invalid credentials"
    );
  });
});

describe("Jest async utilities and mocking", () => {
  let mockLogin: jest.Mock;

  beforeEach(() => {
    mockLogin = jest.fn();
  });

  test("mock resolved value", async () => {
    mockLogin.mockResolvedValue("fake-token");
    await expect(mockLogin()).resolves.toBe("fake-token");
  });

  test("mock rejected value", async () => {
    mockLogin.mockRejectedValue(new Error("Service down"));
    await expect(mockLogin()).rejects.toThrow("Service down");
  });
});
