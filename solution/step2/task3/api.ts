// User type definition
export interface User {
  id: string;
  name: string;
  email: string;
}

// Simulate API delay function - Complete during Step 1 - Implement a Data-Fetching Function
export function simulateApiCall<T>(data: T, shouldFail = false, delay = 300): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("API request failed"));
      } else {
        resolve(data);
      }
    }, delay);
  });
}

// Async function to fetch user data  - Complete during Step 1 - Implement a Data-Fetching Function
export async function fetchUserData(userId: string): Promise<User> {
  const mockUser: User = {
    id: userId,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return simulateApiCall(mockUser);
}