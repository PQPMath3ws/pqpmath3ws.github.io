import pagesStatus from '../../static/pages_status.json';

import hackerSinceroStyles from '../../assets/css/hackersincero.module.css';

const HackerSinceroHomepage = () => {
    const setMaintenancePage = () => {
        var MaintenancePage = require('../maintenance');
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        document.documentElement.className = hackerSinceroStyles["hackersincero-start-code"];
        document.body.className = hackerSinceroStyles["hackersincero-start-code"];
        document.body.id = hackerSinceroStyles["hackersincero-body"];
        var home = require('./home');
        return home.default();
    };
    let BodyComponent = null;
    if(pagesStatus.hsBlogIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default HackerSinceroHomepage;