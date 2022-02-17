import pagesStatus from '../../static/pages_status.json';

const ProgramadorLoucoHomepage = () => {
    const setMaintenancePage = () => {
        var MaintenancePage = require('../maintenance');
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