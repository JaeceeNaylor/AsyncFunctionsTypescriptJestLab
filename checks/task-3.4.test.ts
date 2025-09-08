import fs from "fs";
import path from "path";

describe("Task 3.4 - Use exports.simulateApiCall in fetchUserData", () => {
  it("should call exports.simulateApiCall instead of simulateApiCall directly", () => {
    const filePath = path.join(__dirname, "../src/api.ts");
    const content = fs.readFileSync(filePath, "utf8");

    // Check that fetchUserData exists
    expect(content).toMatch(/export\s+async\s+function\s+fetchUserData/);

    // Ensure simulateApiCall is called via exports.
    expect(content).toMatch(/return\s+exports\.simulateApiCall\(/);

    // Ensure the old direct call isn't present anymore
    expect(content).not.toMatch(/return\s+simulateApiCall\(/);
  });
});
