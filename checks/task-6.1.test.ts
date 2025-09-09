import fs from "fs";

describe("Task 6.1 - Add new describe block for Jest utilities", () => {
  it("contains a describe block named 'Jest async utilities and mocking'", () => {
    const content = fs.readFileSync("../__test__/auth.test.ts", "utf8");

    expect(content).toMatch(
      /describe\(["'`]Jest async utilities and mocking["'`],\s*\(\)\s*=>\s*{/
    );
  });
});
