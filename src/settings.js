
function URLS(){

    function backendURL() {
        const URL = "https://andreas-cph.com/prep1Back";
        return URL;
    }

    function externalApi() {
        const URL = "https://andreas-cph.com/prep1Back/api/info/external";
        return URL;
    }

    function personApi() {
        const URL = "https://andreas-cph.com/prep1Back/api/person";
        return URL;
    }

    function hobbyApi() {
        const URL = "https://andreas-cph.com/prep1Back/api/hobby";
        return URL;
    }

    return {
        backendURL,
        externalApi,
        personApi,
        hobbyApi
    }

}

const settingUrl = URLS();

export default settingUrl;