import fs from "fs";

describe("Task 5.4 - Add test for getUserProfile with valid token", () => {
  const filePath = "../__test__/auth.test.ts";
  let fileContent: string;

  beforeAll(() => {
    fileContent = fs.readFileSync(filePath, "utf-8");
  });

  it("still has the import from ../src/auth", () => {
    expect(fileContent).toMatch(/import\s*{\s*login,\s*getUserProfile,\s*authenticateAndFetchProfile\s*}\s*from\s*["']..\/src\/auth["']/);
  });

  it("includes the describe block for Authentication Flow", () => {
    expect(fileContent).toMatch(/describe\(["']Authentication Flow["']/);
  });

  it("keeps the successful login test", () => {
    expect(fileContent).toMatch(/await expect\(login\("admin", "password"\)\)\.resolves\.toBe\("mock-token"\)/);
  });

  it("keeps the failed login test", () => {
    expect(fileContent).toMatch(/await expect\(login\("wrong", "creds"\)\)\.rejects\.toThrow\("Invalid credentials"\)/);
  });

  it("adds a test for getUserProfile with valid token", () => {
    expect(fileContent).toMatch(/test\(["']getUserProfile with valid token returns profile["']/);
    expect(fileContent).toMatch(/await expect\(getUserProfile\("mock-token"\)\)\.resolves\.toEqual\s*\({\s*username:\s*["']admin["'],\s*email:\s*["']admin@example.com["']\s*}\s*\)/m);
  });
});
