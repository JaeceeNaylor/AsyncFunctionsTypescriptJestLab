import fs from "fs";
import path from "path";

describe("Task 5.7 - Add authenticateAndFetchProfile failure test", () => {
  const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(filePath, "utf-8").trim();
  });

  it("contains a test that verifies authenticateAndFetchProfile fails with wrong credentials", () => {
    // Check the test block description
    expect(content).toMatch(
      /test\(["'`]authenticateAndFetchProfile fails with wrong credentials["'`]/
    );

    // Check the expect statement
    expect(content).toMatch(
      /await expect\(authenticateAndFetchProfile\(\s*["'`]user["'`]\s*,\s*["'`]wrong["'`]\s*\)\)\.rejects\.toThrow\(\s*["'`]Invalid credentials["'`]\s*\)/s
    );
  });
});
