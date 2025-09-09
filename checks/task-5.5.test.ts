import fs from "fs";

describe("Task 5.5 - Add test for getUserProfile with invalid token", () => {
  const filePath = "../__test__/auth.test.ts";
  let fileContent: string;

  beforeAll(() => {
    fileContent = fs.readFileSync(filePath, "utf-8");
  });

  it("still has the import from ../src/auth", () => {
    expect(fileContent).toMatch(/import\s*{\s*login,\s*getUserProfile,\s*authenticateAndFetchProfile\s*}\s*from\s*["']..\/src\/auth["']/);
  });

  it("still has the Authentication Flow describe block", () => {
    expect(fileContent).toMatch(/describe\(["']Authentication Flow["']/);
  });

  it("still has the successful login test", () => {
    expect(fileContent).toMatch(/await expect\(login\("admin", "password"\)\)\.resolves\.toBe\("mock-token"\)/);
  });

  it("still has the failed login test", () => {
    expect(fileContent).toMatch(/await expect\(login\("wrong", "creds"\)\)\.rejects\.toThrow\("Invalid credentials"\)/);
  });

  it("still has the valid token profile test", () => {
    expect(fileContent).toMatch(/await expect\(getUserProfile\("mock-token"\)\)\.resolves\.toEqual\s*\({\s*username:\s*["']admin["'],\s*email:\s*["']admin@example.com["']\s*}\s*\)/m);
  });

  it("adds a test for getUserProfile with invalid token", () => {
    expect(fileContent).toMatch(/test\(["']getUserProfile with invalid token throws error["']/);
    expect(fileContent).toMatch(/await expect\(getUserProfile\("bad-token"\)\)\.rejects\.toThrow\("Invalid token"\)/);
  });
});
