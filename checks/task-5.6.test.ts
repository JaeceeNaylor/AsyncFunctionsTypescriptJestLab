import fs from "fs";

describe("Task 5.6 - Add authenticateAndFetchProfile test", () => {
  it("contains a test that verifies authenticateAndFetchProfile succeeds with correct credentials", () => {
    const content = fs.readFileSync("../__test__/auth.test.ts", "utf8");

    expect(content).toMatch(
      /test\(["'`]authenticateAndFetchProfile succeeds with correct credentials["'`],\s*async\s*\(\)\s*=>\s*{[\s\S]*authenticateAndFetchProfile\("admin",\s*"password"\)[\s\S]*toEqual\(\s*{\s*username:\s*["'`]admin["'`],\s*email:\s*["'`]admin@example\.com["'`]\s*}\s*\)[\s\S]*}\)/
    );
  });
});
