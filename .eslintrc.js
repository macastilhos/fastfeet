module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // o prittier informa ao eslint que esta linha existe algum erro.
    'prettier/prettier': 'error',
    //..Desligando a obrigatoriedade de colocar o this na criacao dos metodos
    'class-method-use-this': 'off',
    // Permite que se receba o parametro e possa mudar o valor dele, o padrão é não nao possa alterar.
    'no-param-reassign': 'off',
    // desliga o padrão que obriga a criação de variaveis no formato camelcase(ex.minhaVariavel)
    'camelcase': 'off',
    // não vai reclamar se caso a variavel declara e não usada for "next"
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
