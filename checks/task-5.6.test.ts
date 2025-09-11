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

    // Flexible: allows either .resolves OR const/expect pattern, with flexible object formatting
    const eitherPattern =
      /(await\s+expect\(authenticateAndFetchProfile\("admin",\s*"password"\)\)\.resolves\.toEqual\s*\(\s*\{[\s\S]*?username:\s*["'`]admin["'`][\s\S]*?email:\s*["'`]admin@example\.com["'`][\s\S]*?\}\s*\)|const\s+profile\s*=\s*await\s+authenticateAndFetchProfile\("admin",\s*"password"\);[\s\S]*?expect\(profile\)\.toEqual\s*\(\s*\{[\s\S]*?username:\s*["'`]admin["'`][\s\S]*?email:\s*["'`]admin@example\.com["'`][\s\S]*?\}\s*\))/;

    expect(content).toMatch(eitherPattern);
  });
});
