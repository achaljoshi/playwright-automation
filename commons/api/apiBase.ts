import { Page } from '@playwright/test'
import config from '../config/config'

export const getRequest = async (page: Page, path:string) => {
  return await page.request.get(`${config.baseUrl}/`+path)
}

export const postRequest = async (page: Page, path:string) => {
    const requestData = {
        key1: 'value1',
        key2: 'value2',
    };

    return await page.request.post(`${config.baseUrl}/`+path, {
        data: requestData,
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
        },
    });
  }
  