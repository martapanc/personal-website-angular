module.exports = {
    preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
    setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    moduleNameMapper: {},
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: [
        'node_modules/(?!.*\\.mjs$)',
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.spec.json',
        },
    },
};
