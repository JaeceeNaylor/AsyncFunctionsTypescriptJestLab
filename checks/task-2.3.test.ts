// __checktests__/task-2.3.test.ts
import { fetchUserData } from "../src/api";
import fs from "fs";
import path from "path";

describe("Task 2.3 - fetchUserData", () => {
  it("resolves with a mock user containing the correct id, name, and email", async () => {
    const user = await fetchUserData("123");

    expect(user).toEqual({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });

  it("returns the result of calling simulateApiCall with mockUser", async () => {
    const fs = require("fs");
    const content = fs.readFileSync("src/api.ts", "utf-8");

    // Normalize whitespace
    const normalized = content.replace(/\s+/g, " ");

    expect(normalized).toMatch(/return\s+simulateApiCall\(mockUser\);?/);
    });

});
