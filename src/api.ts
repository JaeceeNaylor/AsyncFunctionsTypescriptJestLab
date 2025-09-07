// User type definition
export interface User {
  id: string;
  name: string;
  email: string;
}

// Simulate API delay
function simulateApiCall<T>(data: T, shouldFail = false, delay = 300): Promise<T> {
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

// Async function to fetch user data
export async function fetchUserData(userId: string): Promise<User> {
  if (!userId) {
    throw new Error("Invalid userId");
  }

  // Mock user data
  const mockUser: User = {
    id: userId,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return simulateApiCall(mockUser);
}
