import * as fs from "fs";

describe("Task 5.1 - auth.test.ts import statement", () => {
  it("should contain an import statement for login, getUserProfile, and authenticateAndFetchProfile", () => {
    const content = fs.readFileSync("../__tests__/auth.test.ts", "utf-8").trim();

    // Regex allows optional semicolon at the end
    const importRegex =
      /^import\s*{\s*login\s*,\s*getUserProfile\s*,\s*authenticateAndFetchProfile\s*}\s*from\s*["']..\/src\/auth["'];?$/m;

    expect(content).toMatch(importRegex);
  });
});
