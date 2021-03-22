const config = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  // parserPreset: 'conventional-changelog-atom',
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  // formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  // rules: {},
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  // ignores: [(commit) => commit === '' || commit === 'testing'],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl: `
    Motivation: https://www.conventionalcommits.org/en/v1.0.0/
    Rules: https://www.npmjs.com/package/@commitlint/config-conventional
    Extended: https://www.npmjs.com/package/conventional-changelog-atom`,
};

module.exports = config;
