import { getUserProfile } from "../src/auth";

describe("Task 4.2 - Implement token validation in getUserProfile", () => {
  it("should return the user profile when given a valid token", async () => {
    await expect(getUserProfile("mock-token")).resolves.toEqual({
      username: "admin",
      email: "admin@example.com",
    });
  });

  it("should throw an error when given an invalid token", async () => {
    await expect(getUserProfile("wrong-token")).rejects.toThrow("Invalid token");
    await expect(getUserProfile("")).rejects.toThrow("Invalid token");
  });
});
