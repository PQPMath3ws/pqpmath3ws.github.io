import pagesStatus from '../../static/pages_status.json';

import programadorLoucoStyles from '../../assets/css/programadorlouco.module.css';

const ProgramadorLoucoHomepage = () => {
    const setMaintenancePage = () => {
        var MaintenancePage = require('../maintenance');
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        document.documentElement.className = programadorLoucoStyles["programadorlouco-start-code"];
        document.body.className = programadorLoucoStyles["programadorlouco-start-code"];
        document.body.id = programadorLoucoStyles["programadorlouco-body"];
        var home = require('./home');
        return home.default();
    };
    let BodyComponent = null;
    if(pagesStatus.plBlogIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default ProgramadorLoucoHomepage;