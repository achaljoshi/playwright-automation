import { test, expect } from '@playwright/test';
import { baseUiTest } from '../../commons/ui/baseUiTest';
import config from '../../commons/config/config';
import {LOGIN_PAGE} from '../../commons/ui/constants'


let basetest

const invalidUsername = [
  '11111',
  '@@@@@',
  'admin'
];

const invalidPassword = [
  '11111'
];

test.beforeEach('Before Test', async ({ page }) => {
  console.log('Before Test')
  basetest = new baseUiTest(page);
  await basetest.goToUrl(config.loginUrl);
})

test.afterEach('After Test', async ({ page }) => {
  console.log('After Test')
  // await page.close();
})

test.describe('Verify Login page details', () => {  
  test('Verify Login page elements', async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
    description: 'This test is for Verifing Login page details'
  }))

    await test.step("Checking Visibility By Text "+LOGIN_PAGE.ID, async () => {await basetest.checkVisibilityByText(LOGIN_PAGE.ID)});
    await test.step("Checking Visibility By Label "+LOGIN_PAGE.ID, async () => {await basetest.checkVisibilityByLabel(LOGIN_PAGE.ID)});
    await test.step("Checking Visibility By Text "+LOGIN_PAGE.암호, async () => {await basetest.checkVisibilityByText(LOGIN_PAGE.암호)});
    await test.step("Checking Visibility By Label "+LOGIN_PAGE.암호, async () => {await basetest.checkVisibilityByLabel(LOGIN_PAGE.암호)});
    await test.step("Checking Visibility By Label "+LOGIN_PAGE.로그인_유지하기, async () => {await basetest.checkVisibilityByLabel(LOGIN_PAGE.로그인_유지하기)});
    await test.step("Checking Visibility By Text "+LOGIN_PAGE.로그인_유지하기, async () => {await basetest.checkVisibilityByText(LOGIN_PAGE.로그인_유지하기)});
    await test.step("Checking Visibility By Name "+LOGIN_PAGE.로그인, async () => {await basetest.checkButtonVisibilityByRoleName(LOGIN_PAGE.로그인)});
    await test.step("Checking Status By Name "+LOGIN_PAGE.로그인, async () => {await basetest.checkIsButtonEnabledByRoleName(LOGIN_PAGE.로그인)});
    await test.step("Checking Link By Name "+LOGIN_PAGE.회원가입, async () => {await basetest.checkLinkVisibilityByRoleName(LOGIN_PAGE.회원가입)});
    await test.step("Checking Link By Name "+LOGIN_PAGE.회원가입, async () => {await basetest.checkLinkVisibilityByRoleName(LOGIN_PAGE.회원가입)});
  });

  test('Verify Login page signup link', async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
      description: 'This test is for Verifing Login page Signup Link'
    }))

    await test.step("Checking Link By Name "+LOGIN_PAGE.회원가입, async () => {await basetest.clickLinkByRoleName(LOGIN_PAGE.회원가입)});
    await test.step("Verify Page URL "+LOGIN_PAGE.회원가입, async () => {await basetest.verifyPageURL('/signup/')});
  });

  test('Verify Login page forgot link', async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
      description: 'This test is for Verifing Login page Forgot Link'
    }))

    await test.step("Checking Link By Name "+LOGIN_PAGE.비밀번호, async () => {await basetest.clickLinkByRoleName(LOGIN_PAGE.비밀번호)});
    await test.step("Verify Page URL "+LOGIN_PAGE.비밀번호, async () => {await basetest.verifyPageURL('/forgot/')});
  });
})

test.describe('Verify Login with valid details', () => {  
  test('Verify Login with valid credentials', async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
      description: 'This test is for Verifying Login with Valid Credentials'
    }))

    await test.step("Fill Text By Label "+LOGIN_PAGE.ID, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.ID, config.username)});
    await test.step("Fill Text By Label "+LOGIN_PAGE.암호, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.암호, config.password)});
    await test.step("Click Button By Name "+LOGIN_PAGE.로그인, async () => {await basetest.clickByButtonName(LOGIN_PAGE.로그인)});
    await test.step("Click Link By Name "+config.username+"(1)", async () => {await basetest.clickByLinkName(config.username+"(1)")});
    await test.step("Click Link By Name "+LOGIN_PAGE.로그아웃, async () => {await basetest.clickByLinkName(LOGIN_PAGE.로그아웃)});
  });
})

test.describe('Verify Login with Invalid details', () => {  
  test('Verify Login with invalid credentials '+invalidUsername[0], async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
      description: 'This test is for Verifying Login with invalid Credentials'+invalidUsername[0]
    }))

    await test.step("Fill Text By Label "+LOGIN_PAGE.ID, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.ID, invalidUsername[0])});
    await test.step("Fill Text By Label "+LOGIN_PAGE.암호, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.암호, invalidPassword[0])});
    await test.step("Click Button By Name "+LOGIN_PAGE.로그인, async () => {await basetest.clickByButtonName(LOGIN_PAGE.로그인)});
    await test.step("Verify Text "+LOGIN_PAGE.ERROR_PLEASE_CHECK_ENTERED_VALUE, async () => {await basetest.checkVisibilityByText(LOGIN_PAGE.ERROR_PLEASE_CHECK_ENTERED_VALUE, "-Error: Please check the entered value.- text is not visible")});
  });

  test('Verify Login with invalid credentials '+invalidUsername[1], async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
      description: 'This test is for Verifying Login with invalid Credentials'+invalidUsername[1]
    }))

    await test.step("Fill Text By Label "+LOGIN_PAGE.ID, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.ID, invalidUsername[1])});
    await test.step("Fill Text By Label "+LOGIN_PAGE.암호, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.암호, invalidPassword[0])});
    await test.step("Click Button By Name "+LOGIN_PAGE.로그인, async () => {await basetest.clickByButtonName(LOGIN_PAGE.로그인)});
    await test.step("Verify Text "+LOGIN_PAGE.ERROR_PLEASE_CHECK_ENTERED_VALUE, async () => {await basetest.checkVisibilityByText(LOGIN_PAGE.ERROR_PLEASE_CHECK_ENTERED_VALUE, "-Error: Please check the entered value.- text is not visible")});
  });

  test('Verify Login with invalid credentials '+invalidUsername[2], async ({ page }) => {
    test.info().annotations.push(({type: 'Test',
      description: 'This test is for Verifying Login with invalid Credentials'+invalidUsername[2]
    }))

    await test.step("Fill Text By Label "+LOGIN_PAGE.ID, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.ID, invalidUsername[2])});
    await test.step("Fill Text By Label "+LOGIN_PAGE.암호, async () => {await basetest.fillTextByLabel(LOGIN_PAGE.암호, invalidPassword[0])});
    await test.step("Click Button By Name "+LOGIN_PAGE.로그인, async () => {await basetest.clickByButtonName(LOGIN_PAGE.로그인)});
    await test.step("Verify Text "+LOGIN_PAGE.PLEASE_CHECK_YOUR_USERNAME_AND_PASSWORD_AGAIN, async () => {await basetest.checkVisibilityByText(LOGIN_PAGE.PLEASE_CHECK_YOUR_USERNAME_AND_PASSWORD_AGAIN, "-Please check your username and password again.- text is not visible")});
  });
})