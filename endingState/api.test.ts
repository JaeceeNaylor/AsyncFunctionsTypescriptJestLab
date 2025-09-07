import * as api from "../src/api";

describe("fetchUserData", () => {
  test("resolves with user data when given a valid userId", async () => {
    await expect(api.fetchUserData("123")).resolves.toEqual({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });

  test("rejects with error if userId is invalid", async () => {
    await expect(api.fetchUserData("")).rejects.toThrow("Invalid userId");
  });

  test("handles simulated API failure", async () => {
    jest.spyOn(api, "simulateApiCall").mockRejectedValueOnce(
      new Error("API request failed")
    );

    await expect(api.fetchUserData("123")).rejects.toThrow("API request failed");
  });
});
