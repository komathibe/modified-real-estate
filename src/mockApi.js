import { properties, users } from './sampleData';

const mockApi = {
  getProperties: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(properties);
      }, 500);
    });
  },

  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 500);
    });
  },

  addProperty: (property) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (property.name) {
          property.id = properties.length + 1;
          properties.push(property);
          resolve(property);
        } else {
          reject(new Error("Invalid property data"));
        }
      }, 500);
    });
  },

  registerUser: (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.email && user.password) {
          user.id = users.length + 1;
          users.push(user);
          resolve(user);
        } else {
          reject(new Error("Invalid user data"));
        }
      }, 500);
    });
  },

  loginUser: (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 500);
    });
  },

  
  requestPasswordReset: (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userExists = users.some((u) => u.email === email);
        if (userExists) {
          resolve({ message: 'If this email is registered, you will receive a password reset link.' });
        } else {
          reject(new Error('This email is not registered'));
        }
      }, 500);
    });
  }
  
};




export default mockApi;
