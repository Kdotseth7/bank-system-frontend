import getBaseUrl from "./getBaseUrl";

class APIClient {
    constructor() {
        this.baseUrl = getBaseUrl();
        this.mode = 'cors';
    }

    async fetchWrapper(request, requestParams) {
        try {
            const response = await fetch(request, requestParams);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async createAccount(accountId) {
        const requestUrl = `${this.baseUrl}/accounts/create_account?account_id=${encodeURIComponent(accountId)}`;
        const request = new Request(requestUrl);
        const requestParams = {
            method: 'POST',
            mode: this.mode,
            cache: 'default'
        };
        const response = await this.fetchWrapper(request, requestParams);
        const responseData = await response.json();
        return responseData;
    }

    async getAccountDetails(accountId) {
        const requestUrl = `${this.baseUrl}/accounts/${accountId}`;
        const request = new Request(requestUrl);
        const requestParams = {
            method: 'GET',
            mode: this.mode,
            cache: 'default',
        };
        const response = await this.fetchWrapper(request, requestParams);
        const responseData = await response.json();
        return responseData;
    }
}

export default APIClient;