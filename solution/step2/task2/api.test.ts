import * as api from "../src/api";

describe("fetchUserData", () => {
  test("resolves with user data when given a valid userId", async () => {
    await expect(api.fetchUserData("123")).resolves.toEqual({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });
});