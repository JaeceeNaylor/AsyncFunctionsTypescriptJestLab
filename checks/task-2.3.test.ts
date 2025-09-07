// __checktests__/task-2.3.test.ts
import { fetchUserData } from "../src/api";

describe("Task 2.3 - fetchUserData", () => {
  it("resolves with a mock user containing the correct id, name, and email", async () => {
    const user = await fetchUserData("123");

    expect(user).toEqual({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });

  it("calls simulateApiCall internally", async () => {
    // Dynamically import so we can spy on simulateApiCall
    const api = await import("../src/api");
    const spy = jest.spyOn(api, "simulateApiCall");

    await api.fetchUserData("999");

    expect(spy).toHaveBeenCalledWith({
      id: "999",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });
});
