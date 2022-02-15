import pagesStatus from '../../static/pages_status.json';

const ProgramadorLoucoHomepage = () => {
    const setMaintenancePage = () => {
        require('../../assets/css/maintenance.css');
        var MaintenancePage = require('../maintenance');
        document.body.id = "maintenance-body";
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        return (
            <div>Em construção...</div>
        );
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