import fs from "fs";

describe("Task 5.7 - Add authenticateAndFetchProfile failure test", () => {
  it("contains a test that verifies authenticateAndFetchProfile fails with wrong credentials", () => {
    const content = fs.readFileSync("../__test__/auth.test.ts", "utf8");

    expect(content).toMatch(
      /test\(["'`]authenticateAndFetchProfile fails with wrong credentials["'`],\s*async\s*\(\)\s*=>\s*{[\s\S]*await expect\(authenticateAndFetchProfile\(["'`]user["'`],\s*["'`]wrong["'`]\)\.rejects\.toThrow\(\s*["'`]Invalid credentials["'`]\s*\)[\s\S]*}\)/
    );
  });
});
