import {
    DEV_BASE_URL,
    DEV_WEB_SERVICE_URL
} from '../constants'

let settings = null;

const appSettingsURL = "#{BaseUrl}" ? "appSettings.json" : "/pages/consumer-affairs/appSettings.json";

export const getSettings = () => {


    return new Promise((resolve, reject) => {
        if (settings) {
            resolve(settings);
        } else {
            fetch(appSettingsURL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(json => {
                    json.baseUrl = json.baseUrl === "#{BaseUrl}" ? DEV_BASE_URL : json.baseUrl;
                    json.webServiceUrl = json.webServiceUrl === "#{WebServiceUrl}" ? DEV_WEB_SERVICE_URL : json.webServiceUrl;

                    settings = json;
                    resolve(json);
                })
                .catch(err => reject(err));
        }
    });
};