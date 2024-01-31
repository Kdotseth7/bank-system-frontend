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
        const requestUrl = `${this.baseUrl}/accounts/get_account_details?account_id=${encodeURIComponent(accountId)}`;
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

    async depositMoney(accountId, amount) {
        const requestUrl = `${this.baseUrl}/accounts/deposit?account_id=${encodeURIComponent(accountId)}&amount=${encodeURIComponent(amount)}`;
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

    async payMoney(accountId, amount) {
        const requestUrl = `${this.baseUrl}/accounts/pay?account_id=${encodeURIComponent(accountId)}&amount=${encodeURIComponent(amount)}`;
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

    async initiateTransfer(sourceId, targetId, amount) {
        const requestUrl = `${this.baseUrl}/transfers/transfer?source_id=${encodeURIComponent(sourceId)}&target_id=${encodeURIComponent(targetId)}&amount=${encodeURIComponent(amount)}`;
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

    async acceptTransfer(accountId, transferId) {
        const requestUrl = `${this.baseUrl}/transfers/accept_transfer?account_id=${encodeURIComponent(accountId)}&transfer_id=${encodeURIComponent(transferId)}`;
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

    async getTopActivity(n)  {
        const requestUrl = `${this.baseUrl}/accounts/top_activity?n=${encodeURIComponent(n)}`;
        const request = new Request(requestUrl);
        const requestParams = {
            method: 'GET',
            mode: this.mode,
            cache: 'default'
        };
        const response = await this.fetchWrapper(request, requestParams);
        const responseData = await response.json();
        return responseData;
    }

}

export default APIClient;