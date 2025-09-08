import { authenticateAndFetchProfile } from "../src/auth";

describe("Task 4.3 - Implement authenticateAndFetchProfile", () => {
  it("should return the user profile when valid credentials are provided", async () => {
    await expect(authenticateAndFetchProfile("admin", "password")).resolves.toEqual({
      username: "admin",
      email: "admin@example.com",
    });
  });

  it("should reject with an error when invalid credentials are provided", async () => {
    await expect(authenticateAndFetchProfile("user", "wrongpass")).rejects.toThrow(
      "Invalid credentials"
    );
  });
});
