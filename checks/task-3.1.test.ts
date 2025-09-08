import fs from "fs";
import path from "path";

describe("Task 3.1 - Add import to api.test.ts", () => {
  it("should contain an import statement for '../src/api'", () => {
    const filePath = path.join(__dirname, "../src/api.test.ts");
    const content = fs.readFileSync(filePath, "utf8");

    expect(content).toMatch(/import\s+\*\s+as\s+api\s+from\s+["']\.\.\/src\/api["'];?/);
  });
});
