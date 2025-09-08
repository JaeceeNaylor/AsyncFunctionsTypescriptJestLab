import fs from "fs";
import path from "path";

describe("Task 3.2 - Add fetchUserData test", () => {
  it("should include a describe block for fetchUserData with a valid userId test", () => {
    const filePath = path.join(__dirname, "../src/api.test.ts");
    const content = fs.readFileSync(filePath, "utf8");

    // Check for import
    expect(content).toMatch(/import\s+\*\s+as\s+api\s+from\s+["']\.\.\/src\/api["'];?/);

    // Check for describe block
    expect(content).toMatch(/describe\s*\(\s*["']fetchUserData["']\s*,/);

    // Check for test block with resolves.toEqual and correct object
    expect(content).toMatch(/test\s*\(\s*["']resolves with user data when given a valid userId["']\s*,/);
    expect(content).toMatch(/await\s+expect\(api\.fetchUserData\("123"\)\)\.resolves\.toEqual\(\s*{\s*id:\s*["']123["'],\s*name:\s*["']John Doe["'],\s*email:\s*["']john\.doe@example\.com["']\s*}\s*\)/);
  });
});
