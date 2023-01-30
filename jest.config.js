module.exports = {
    preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
    testMatch: ['**/src/**/+(*.)+(spec).+(ts)'],
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: [
        'node_modules/(?!@angular|tslib|ngx-cookie|@ng-bootstrap|ngx-device-detector|ngx-google-analytics|ngx-webstorage|ngx-skeleton-loader|@swimlane|@ngx-translate|mobx-angular|ngx-image-zoom|resourcify-portal-lib|ngx-infinite-scroll)',
        'node_modules/(?!.*\\.mjs$)',
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.spec.json',
        },
    },
};
