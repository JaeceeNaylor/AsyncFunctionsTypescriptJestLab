// __checktests__/task-2.2.test.ts
import { simulateApiCall } from "../src/api";

describe("Task 2.2 - Enhanced simulateApiCall", () => {
  it("resolves with data after the given delay", async () => {
    const mockData = { id: "1", name: "Jane Doe" };
    const start = Date.now();

    const result = await simulateApiCall(mockData, false, 200);
    const elapsed = Date.now() - start;

    expect(result).toEqual(mockData);
    expect(elapsed).toBeGreaterThanOrEqual(180); // allow small timing tolerance
  });

  it("rejects with an error if shouldFail is true", async () => {
    await expect(simulateApiCall("bad data", true, 50)).rejects.toThrow("API request failed");
  });
});
