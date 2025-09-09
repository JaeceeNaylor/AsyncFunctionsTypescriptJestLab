import * as fs from "fs";
import path from "path";

describe("Task 5.1 - auth.test.ts import statement", () => {
  it("should contain an import statement for login, getUserProfile, and authenticateAndFetchProfile", () => {
    const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
    const content = fs.readFileSync(filePath, "utf-8").trim();

    // Regex allows optional semicolon at the end
    const importRegex =
      /^import\s*{\s*login\s*,\s*getUserProfile\s*,\s*authenticateAndFetchProfile\s*}\s*from\s*["']..\/src\/auth["'];?$/m;

    expect(content).toMatch(importRegex);
  });
});
