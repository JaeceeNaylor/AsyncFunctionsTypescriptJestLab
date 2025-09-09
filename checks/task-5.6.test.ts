import fs from "fs";
import path from "path";

describe("Task 5.6 - Add authenticateAndFetchProfile test", () => {
  const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(filePath, "utf-8").trim();
  });

  it("contains a test that verifies authenticateAndFetchProfile succeeds with correct credentials", () => {
    expect(content).toMatch(
      /test\(["'`]authenticateAndFetchProfile succeeds with correct credentials["'`]/
    );

    expect(content).toMatch(
      /await expect\(authenticateAndFetchProfile\("admin",\s*"password"\)\)\.resolves\.toEqual\s*\(\s*{\s*username:\s*["'`]admin["'`]\s*,\s*email:\s*["'`]admin@example\.com["'`]\s*,?\s*}\s*\)/s
    );
  });
});
