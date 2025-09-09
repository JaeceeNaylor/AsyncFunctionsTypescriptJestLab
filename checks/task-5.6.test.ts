import fs from "fs";
import path from "path";

describe("Task 5.6 - Add authenticateAndFetchProfile test", () => {
  it("contains a test that verifies authenticateAndFetchProfile succeeds with correct credentials", () => {
    const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
    const content = fs.readFileSync(filePath, "utf-8").trim();

    expect(content).toMatch(
      /test\(["'`]authenticateAndFetchProfile succeeds with correct credentials["'`],\s*async\s*\(\)\s*=>\s*{[\s\S]*authenticateAndFetchProfile\("admin",\s*"password"\)[\s\S]*toEqual\(\s*{\s*username:\s*["'`]admin["'`],\s*email:\s*["'`]admin@example\.com["'`]\s*}\s*\)[\s\S]*}\)/
    );
  });
});
