module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': "off",
    'vue/singleline-html-element-content-newline': "off",
    'vue/html-self-closing': "off",
    'vue/html-indent': "off"
  }
}