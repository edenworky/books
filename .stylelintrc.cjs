module.exports = {
  extends: [
    /*
     * @see https://github.com/stylelint/stylelint/blob/15.11.0/docs/user-guide/rules.md
     * @see https://github.com/stylelint-scss/stylelint-scss/tree/v5.3.2
     */
    'stylelint-config-standard-scss',
  ],
  overrides: [
    {
      files       : ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files       : ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'declaration-property-value-no-unknown'      : true,
    'media-feature-name-value-no-unknown'        : true,
    'no-unknown-animations'                      : true,
    'no-unknown-custom-properties'               : true,
    'selector-no-qualifying-type'                : true,
    'font-weight-notation'                       : 'named-where-possible',
    'color-function-notation'                    : 'legacy',
    'font-family-name-quotes'                    : 'always-unless-keyword',
    'scss/block-no-redundant-nesting'            : true,
    'scss/selector-no-redundant-nesting-selector': true,
    'at-rule-empty-line-before'                  : ['always',
      {ignore: ['first-nested'], ignoreAtRules: ['import']}],
    'no-invalid-position-at-import-rule': null,
    'no-empty-source'                   : null,
    'selector-pseudo-class-no-unknown'  : [true,
      {ignorePseudoClasses: ['deep']}],
    'indentation': 2,

  },
}
