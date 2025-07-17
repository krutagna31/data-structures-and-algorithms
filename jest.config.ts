// jest.config.ts
export default {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // 👈 matches your tsconfig path alias
  },
};
