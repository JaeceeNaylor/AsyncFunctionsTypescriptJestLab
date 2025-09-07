import { simulateApiCall } from "../src/api";

describe("Task 2.1 - simulateApiCall", () => {
  it("should return a Promise that resolves with the provided data", async () => {
    const mockData = { id: "1", name: "Test User" };

    await expect(simulateApiCall(mockData)).resolves.toEqual(mockData);
  });

  it("should return a Promise instance", () => {
    const result = simulateApiCall("hello world");
    expect(result).toBeInstanceOf(Promise);
  });
});
