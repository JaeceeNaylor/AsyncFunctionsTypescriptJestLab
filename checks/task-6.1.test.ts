import fs from "fs";
import path from "path";

describe("Task 6.1 - Add new describe block for Jest utilities", () => {
  const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(filePath, "utf-8").trim();
  });

  it("contains a describe block named 'Jest async utilities and mocking'", () => {
    // Just check for the describe name, not the whole function syntax
    expect(content).toMatch(
      /describe\(\s*["'`]Jest async utilities and mocking["'`]/
    );
  });
});
