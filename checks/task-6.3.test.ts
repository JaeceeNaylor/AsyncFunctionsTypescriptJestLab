import fs from "fs";

describe("Task 6.3 - Add mockRejectedValue test", () => {
  it("adds a test for mock rejected value", () => {
    const content = fs.readFileSync("src/auth.test.ts", "utf8");

    // Check test name
    expect(content).toMatch(/test\(["'`]mock rejected value["'`],\s*async\s*\(\)\s*=>/);

    // Check mockRejectedValue usage
    expect(content).toMatch(/mockLogin\.mockRejectedValue\(new Error\(["'`]Service down["'`]\)\)/);

    // Check expect().rejects.toThrow
    expect(content).toMatch(/await\s+expect\(mockLogin\(\)\)\.rejects\.toThrow\(["'`]Service down["'`]\)/);
  });
});
