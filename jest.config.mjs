// import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 /** @type {import { 'jest' }.Config} */
// Add any custom config to be passed to Jest
const config= {
    testEnvironment: 'jest-environment-jsdom', // Mengatur lingkungan pengujian ke jsdom
    modulePaths: ['<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}', 
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/*.type.ts',
        '!<rootDir>/.next/**',
        '!<rootDir>/coverage/**',
        '!<rootDir>/*.config.js',
        '!<rootDir>/src/middleware.ts',
        '!<rootDir>/src/lib/**',
        '!<rootDir>/src/middlewares/**',
        '!<rootDir>/src/pages/api/**'
        


    ]
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Konfigurasi setup tambahan
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)