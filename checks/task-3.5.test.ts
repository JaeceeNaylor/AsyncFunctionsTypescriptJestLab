import fs from "fs";
import path from "path";

describe("Task 3.5 - Add API failure test", () => {
  it("should include a test for handling simulated API failure", () => {
    const filePath = path.join(__dirname, "../__tests__/api.test.ts");
    const content = fs.readFileSync(filePath, "utf8");

    // Ensure the failure test block exists
    expect(content).toMatch(/test\s*\(\s*["']handles simulated API failure["']/);

    // Ensure jest.spyOn is used to mock simulateApiCall rejection
    expect(content).toMatch(/jest\.spyOn\s*\(\s*api,\s*["']simulateApiCall["']\s*\)/);

    // Ensure expectation for API request failed is present
    expect(content).toMatch(/rejects\.toThrow\(\s*["']API request failed["']\s*\)/);
  });
});
