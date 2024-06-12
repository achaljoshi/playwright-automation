import dotenv from 'dotenv'

dotenv.config()

const config = {
  local: {
    baseUrl: "https://news.hada.io",
    loginUrl: 'https://news.hada.io/login',
    signupUrl: 'https://news.hada.io/signup',
    username: "achaljoshi1",
    password: "Achal.1234"
  },
  cicdenv: {
    baseUrl: "https://news.hada.io",
    loginUrl: 'https://news.hada.io/login',
    signupUrl: 'https://news.hada.io/signup',
    username: "achaljoshi1",
    password: "Achal.1234"
  },
  devenv: {
    baseUrl: "https://news.hada.io",
    loginUrl: 'https://news.hada.io/login',
    signupUrl: 'https://news.hada.io/signup',
    username: "achaljoshi",
    password: "Achal.123"
  },
  testenv: {
    baseUrl: "https://news.hada.io",
    loginUrl: 'https://news.hada.io/login',
    signupUrl: 'https://news.hada.io/signup',
    username: "achaljoshi",
    password: "Achal.123"
  },
  stage: {
    baseUrl: "https://news.hada.io",
    loginUrl: 'https://news.hada.io/login',
    signupUrl: 'https://news.hada.io/signup',
    username: "achaljoshi",
    password: "Achal.123"
  },
  production: {
    baseUrl: "https://news.hada.io",
    loginUrl: 'https://news.hada.io/login',
    signupUrl: 'https://news.hada.io/signup',
    username: "achaljoshi",
    password: "Achal.123"
  }
}

// Resolve the test environment
const testEnv = process.env.TEST_ENV as keyof typeof config || ('local' as keyof typeof config)

// eslint-disable-next-line no-console
console.log(`Test will be run against ${config[testEnv].baseUrl}`)

export default config[testEnv]
