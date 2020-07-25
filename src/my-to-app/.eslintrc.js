module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': 'error',
    },
    env: {
        es6: true,
        node: true,
    },
}
