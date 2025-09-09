import * as fs from "fs";
import path from "path";

describe("Task 5.2 - Add first login test", () => {
  it("should include a describe block with a successful login test", () => {
    const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
    const content = fs.readFileSync(filePath, "utf-8").trim();
    // Check import is still present
    const importRegex =
      /^import\s*{\s*login\s*,\s*getUserProfile\s*,\s*authenticateAndFetchProfile\s*}\s*from\s*["']..\/src\/auth["'];?/m;
    expect(content).toMatch(importRegex);

    // Check for describe block
    expect(content).toMatch(/describe\s*\(\s*["']Authentication Flow["']\s*,/);

    // Check for the test case
    const testRegex =
      /test\s*\(\s*["']successful login returns a token["']\s*,\s*async\s*\(\)\s*=>\s*{\s*await\s*expect\s*\(\s*login\(\s*["']admin["']\s*,\s*["']password["']\s*\)\s*\)\.resolves\.toBe\(\s*["']mock-token["']\s*\);?\s*}\s*\);/s;
    expect(content).toMatch(testRegex);
  });
});
