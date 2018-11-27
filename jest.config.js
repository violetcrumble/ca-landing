module.exports = {
    transform: { '^.+\\.jsx?$': '<rootDir>/test/transformer.js' },
    transformIgnorePatterns: ['/node_modules/', '/.cache/'],
    testPathIgnorePatterns: ['/node_modules/', '/.cache/']
}