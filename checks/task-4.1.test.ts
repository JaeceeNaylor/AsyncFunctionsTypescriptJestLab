import { login } from "../src/auth";

describe("Task 4.1 - Implement login function", () => {
  it("should resolve with 'mock-token' when username is 'admin' and password is 'password'", async () => {
    await expect(login("admin", "password")).resolves.toBe("mock-token");
  });

  it("should reject with 'Invalid credentials' for incorrect username or password", async () => {
    await expect(login("user", "wrong")).rejects.toThrow("Invalid credentials");
    await expect(login("admin", "wrong")).rejects.toThrow("Invalid credentials");
    await expect(login("wrong", "password")).rejects.toThrow("Invalid credentials");
  });
});
