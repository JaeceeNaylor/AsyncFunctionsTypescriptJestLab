import fs from "fs";

describe("Task 6.2 - Add first Jest mocking test", () => {
  it("defines mockLogin in beforeEach and tests mockResolvedValue", () => {
    const content = fs.readFileSync("../__test__/auth.test.ts", "utf8");

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
