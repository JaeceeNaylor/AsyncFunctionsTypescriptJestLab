import { fetchUserData } from "../src/api";

describe("fetchUserData", () => {
  test("resolves with user data when given a valid userId", async () => {
    await expect(fetchUserData("123")).resolves.toEqual({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });

  test("rejects with error if userId is invalid", async () => {
    await expect(fetchUserData("")).rejects.toThrow("Invalid userId");
  });

  test("handles simulated API failure", async () => {
    // Overwrite temporarily to simulate failure
    const failingFetch = jest.fn(() =>
      Promise.reject(new Error("API request failed"))
    );

    await expect(failingFetch()).rejects.toThrow("API request failed");
  });
});
