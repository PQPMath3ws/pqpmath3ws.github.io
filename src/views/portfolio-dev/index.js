import pagesStatus from '../../static/pages_status.json';

const PorfolioDevHomepage = () => {
    const setMaintenancePage = () => {
        require('../../assets/css/maintenance.css');
        var MaintenancePage = require('../maintenance');
        document.documentElement.className = "maintenance-start-code";
        document.body.className = "maintenance-start-code";
        document.body.id = "maintenance-body";
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        return (
            <div>Em construção...</div>
        );
    };
    let BodyComponent = null;
    if(pagesStatus.pvIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default PorfolioDevHomepage;