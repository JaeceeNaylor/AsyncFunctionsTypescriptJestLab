import fs from "fs";
import path from "path";

describe("Task 3.3 - Add invalid userId test", () => {
  it("should include a test that rejects when userId is invalid", () => {
    const filePath = path.join(__dirname, "../__tests__/api.test.ts");
    const content = fs.readFileSync(filePath, "utf8");

    // Check for existing import
    expect(content).toMatch(/import\s+\*\s+as\s+api\s+from\s+["']\.\.\/src\/api["'];?/);

    // Ensure describe("fetchUserData") exists
    expect(content).toMatch(/describe\s*\(\s*["']fetchUserData["']\s*,/);

    // Check for new test: rejects with error if userId is invalid
    expect(content).toMatch(/test\s*\(\s*["']rejects with error if userId is invalid["']\s*,/);

    // Ensure the expectation matches rejects.toThrow with "Invalid userId"
    expect(content).toMatch(/await\s+expect\(api\.fetchUserData\(\s*["']{2}\s*\)\)\.rejects\.toThrow\(\s*["']Invalid userId["']\s*\)/);
  });
});
