import fs from "fs";
import path from "path";

describe("Task 6.2 - Add first Jest mocking test", () => {
  const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(filePath, "utf-8").trim();
  });

  it("defines mockLogin in beforeEach and tests mockResolvedValue", () => {
    // Check for mockLogin declaration
    expect(content).toMatch(/let\s+mockLogin\s*:\s*jest\.Mock/);

    // Check for beforeEach assigning jest.fn()
    expect(content).toMatch(/beforeEach\([\s\S]*mockLogin\s*=\s*jest\.fn\(\)/);

    // Check for test block with the correct name
    expect(content).toMatch(/test\(\s*["'`]mock resolved value["'`]/);

    // Check for mockResolvedValue usage
    expect(content).toMatch(/mockLogin\.mockResolvedValue\(\s*["'`]fake-token["'`]\s*\)/);

    // Check for resolves assertion
    expect(content).toMatch(/expect\(mockLogin\(\)\)\.resolves\.toBe\(\s*["'`]fake-token["'`]\s*\)/);
  });
});
