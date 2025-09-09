import fs from "fs";
import path from "path";

describe("Task 6.2 - Add first Jest mocking test", () => {
  it("defines mockLogin in beforeEach and tests mockResolvedValue", () => {
    const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
    const content = fs.readFileSync(filePath, "utf-8").trim();

    // Check for mockLogin declaration
    expect(content).toMatch(/let\s+mockLogin:\s*jest\.Mock/);

    // Check for beforeEach assigning jest.fn()
    expect(content).toMatch(/beforeEach\(\(\)\s*=>\s*{\s*mockLogin\s*=\s*jest\.fn\(\)/);

    // Check for test block with mockResolvedValue
    expect(content).toMatch(/test\(["'`]mock resolved value["'`],\s*async\s*\(\)\s*=>\s*{/);

    // Check for mockResolvedValue usage
    expect(content).toMatch(/mockLogin\.mockResolvedValue\(["'`]fake-token["'`]\)/);

    // Check for expect(mockLogin()).resolves
    expect(content).toMatch(/await\s+expect\(mockLogin\(\)\)\.resolves\.toBe\(["'`]fake-token["'`]\)/);
  });
});
