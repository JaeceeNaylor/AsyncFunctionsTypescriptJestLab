import fs from "fs";

describe("Task 5.3 - Add failed login test", () => {
  const filePath = "../__test__/auth.test.ts";
  let fileContent: string;

  beforeAll(() => {
    fileContent = fs.readFileSync(filePath, "utf-8");
  });

  it("contains a test block for failed login", () => {
    expect(fileContent).toMatch(
      /test\(["'`]failed login rejects with error["'`],\s*async\s*\(\)\s*=>\s*{[\s\S]*login\(["'`]wrong["'`],\s*["'`]creds["'`]\)[\s\S]*rejects\.toThrow\(["'`]Invalid credentials["'`]\)[\s\S]*}\)/m
    );
  });
});
