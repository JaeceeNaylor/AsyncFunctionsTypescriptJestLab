// User type definition
export interface User {
  id: string;
  name: string;
  email: string;
}

// Simulate API delay function - Complete during Step 1 - Implement a Data-Fetching Function
export function simulateApiCall<T>(data: T, shouldFail = false, delay = 300): Promise<T> {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

// Async function to fetch user data  - Complete during Step 1 - Implement a Data-Fetching Function
