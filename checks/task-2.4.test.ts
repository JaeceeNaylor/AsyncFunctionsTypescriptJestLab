// __checktests__/task-2.4.test.ts
import { fetchUserData } from "../src/api";

describe("Task 2.4 - fetchUserData validation", () => {
  it("resolves with user data when given a valid userId", async () => {
    await expect(fetchUserData("123")).resolves.toEqual({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });

  it("throws an error when userId is empty", async () => {
    await expect(fetchUserData("")).rejects.toThrow("Invalid userId");
  });

  it("throws an error when userId is missing", async () => {
    // @ts-expect-error – intentionally call without argument
    await expect(fetchUserData()).rejects.toThrow("Invalid userId");
  });
});
