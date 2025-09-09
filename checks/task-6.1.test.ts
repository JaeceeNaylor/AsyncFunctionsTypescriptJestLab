import fs from "fs";
import path from "path";

describe("Task 6.1 - Add new describe block for Jest utilities", () => {
  it("contains a describe block named 'Jest async utilities and mocking'", () => {
    const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
    const content = fs.readFileSync(filePath, "utf-8").trim();

    expect(content).toMatch(
      /describe\(["'`]Jest async utilities and mocking["'`],\s*\(\)\s*=>\s*{/
    );
  });
});
