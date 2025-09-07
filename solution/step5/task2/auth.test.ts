import { login, getUserProfile, authenticateAndFetchProfile } from "../src/auth";

describe("Authentication Flow", () => {
  test("successful login returns a token", async () => {
    await expect(login("admin", "password")).resolves.toBe("mock-token");
  });
});