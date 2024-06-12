import { Page, expect } from "@playwright/test";

export class baseUiTest{
    constructor(public page: Page) {
    }

    
     //Actions
    goToUrl = async (url: string) => {
        console.log('Go to URL : '+url)
        await this.page.goto(url);
    }

    clickByLinkName = async (name: string, exact?:boolean) => {
        console.log('Click on : '+name)
        if (typeof exact !== "undefined") {
            await this.page.getByRole('link', { name: name, exact: exact }).click();
        }else{
            await this.page.getByRole('link', { name: name}).click();
        }       
    }

    clickByButtonName = async (name: string, exact?:boolean) => {
        console.log('Click on : '+name)
        if (typeof exact !== "undefined") {
            await this.page.getByRole('button', { name: name, exact: exact }).click();
        }else{
            await this.page.getByRole('button', { name: name}).click();
        }
    }

    fillTextByLabel = async (label: string, text:string) => {
        console.log('Fill Text : '+label)
        await this.page.getByLabel(label).fill(text);
    }

    clickLinkByRoleName = async (name: string) => {
        console.log('Click on : '+name)
        await this.page.getByRole('link', { name: name }).click()
    }
    

    //Assertions
    assertTextByLink = async (name: string, message: string, exact?:boolean) => {
        console.log('Assert Text : '+message)
        if (typeof exact !== "undefined") {
            await expect(this.page.getByRole('link', { name: name, exact: exact}), message+"is not visible")
                .toHaveText(message);
        }else
            await expect(this.page.getByRole('link', { name: name }), message+"is not visible")
                .toHaveText(message);
    }

    checkVisibilityByText = async (id: string, errorMessage?:string) => {
        console.log('Check Visibility By Text : '+id)
        if(typeof errorMessage !=="undefined"){
            await expect(this.page.getByText(id).isVisible(), errorMessage).toBeTruthy();
        }else{
            await expect(this.page.getByText(id).isVisible(), id+" text is not visible").toBeTruthy();
        }
    }

    checkVisibilityByLabel = async (label: string, errorMessage?:string) => {
        console.log('Check Visibility By Label : '+label)
        if(typeof errorMessage !=="undefined"){
            await expect(this.page.getByLabel(label).isVisible(), errorMessage).toBeTruthy();
        }else{
            await expect(this.page.getByLabel(label).isVisible(), label+" is not visible").toBeTruthy();
        }
    }

    checkButtonVisibilityByRoleName = async (name: string, errorMessage?:string) => {
        console.log('Check Visibility Of Button By Name : '+name)
        if(typeof errorMessage !=="undefined"){
            await expect(this.page.getByRole('button', { name: name }).isVisible(), errorMessage).toBeTruthy();
        }else{
            await expect(this.page.getByRole('button', { name: name }).isVisible(), name+" is not visible").toBeTruthy();
        }
    }

    checkIsButtonEnabledByRoleName = async (name: string, errorMessage?:string) => {
        console.log('Check Button Enabled By Name : '+name)
        if(typeof errorMessage !=="undefined"){
            await expect(this.page.getByRole('button', { name: name }).isEnabled(), errorMessage).toBeTruthy();
        }else{
            await expect(this.page.getByRole('button', { name: name }).isEnabled(), name+" is not visible").toBeTruthy();
        }
    }
    
    checkLinkVisibilityByRoleName = async (name: string, errorMessage?:string) => {
        console.log('Check Link Visibility By Name : '+name)
        if(typeof errorMessage !=="undefined"){
            await expect(this.page.getByRole('link', { name: name }).isVisible(), errorMessage).toBeTruthy();
        }else{
            await expect(this.page.getByRole('link', { name: name }).isVisible(), name+" is not visible").toBeTruthy();
        }
    }

    verifyPageURL = async (urlString: string, errorMessage?:string) => {
        const currentUrl = this.page.url();
        console.log('Current URL:', currentUrl);
        if(currentUrl.includes(urlString)){
            console.log(`Text '${urlString}' is present on the page.`);
        } else {
            console.error(`Expected text '${urlString}' not found on the page.`);
        }
    }
}