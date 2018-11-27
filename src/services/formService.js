import { getSettings } from './settingService';
import "isomorphic-fetch";
import promise from 'es6-promise';
promise.polyfill();

export function postFormData({ name, email, phone, zip }) {
    return new Promise((resolve, reject) => {
        getSettings()
            .then(settings => {
                const formattedData = formatLeadData({
                    name,
                    email,
                    phone,
                    zip
                });
                postData(
                    `${settings.webServiceUrl}/api/formsubmissions`,
                    formattedData
                ).then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
            });

    });
}

export function formatLeadData({
    name,
    email,
    phone,
    zip,
    dealerId,
}) {
    const { firstName, lastName } = splitName(name);
    const phoneNumber = formatPhoneNumber(phone);

    const params = getQueryParams();

    return {
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        phoneNumber: phoneNumber,
        postalCode: zip,
        lotNumber: dealerId,
        campaignSource: params['utm_source'] || '',
        campaignMedium: params['utm_medium'] || '',
        campaignName: params['utm_campaign'] || '',
        campaignTerm: params['utm_term'] || '',
        campaignContent: params['utm_content'] || '',
        source: `${params['source'] ? params['source'] : 'ConsumerAffairs_LP_Clayton'}`
    };
}

export function formatQueryParams(searchString) {
    if (
      !searchString ||
      typeof searchString !== 'string' ||
      !searchString.length
    ) {
      return {};
    }
  
    if (searchString[0] !== '?') {
      return {};
    }
  
    return searchString
      .substr(1)
      .split('&')
      .map(pair => {
        let keyValue = pair.split('=');
        if (keyValue.length === 2) {
          return {
            [keyValue[0]]: decodeURIComponent(keyValue[1]),
          };
        }
      })
      .reduce((obj, value) => ({ ...obj, ...value }), {});
  }
  

export function getQueryParams() {
    try {
      const query = window.location.search;
      return formatQueryParams(query);
    } catch (e) {
      return {};
    }
  }

export function splitName(fullName) {
    if (typeof fullName === 'string') {
        const firstName = fullName.split(' ');
        if (firstName.length > 1) {
            const lastName = firstName.pop();
            return {
                firstName: firstName.join(' '),
                lastName,
            };
        }
        return { firstName: firstName.join(), lastName: '' };
    }
    return { firstName: '', lastName: '' };
}

export function formatPhoneNumber(number) {
    return '1' + number.toString().replace(/\D/g, '');
}

function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
}

export default {
    formatLeadData,
    splitName,
    postFormData,
};
