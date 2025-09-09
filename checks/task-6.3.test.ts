import fs from "fs";
import path from "path";

describe("Task 6.3 - Add mockRejectedValue test", () => {
  const filePath = path.join(__dirname, "../__tests__/auth.test.ts");
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(filePath, "utf-8").trim();
  });

  it("adds a test for mock rejected value", () => {
    // Check test name exists
    expect(content).toMatch(/test\(\s*["'`]mock rejected value["'`]/);

    // Check mockRejectedValue usage
    expect(content).toMatch(/mockLogin\.mockRejectedValue\(\s*new Error\(\s*["'`]Service down["'`]\s*\)\s*\)/);

    // Check expect().rejects.toThrow usage
    expect(content).toMatch(/expect\(mockLogin\(\)\)\.rejects\.toThrow\(\s*["'`]Service down["'`]\s*\)/);
  });
});
