import pagesStatus from '../../static/pages_status.json';

const MusicasHomepage = () => {
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
    if(pagesStatus.maIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default MusicasHomepage;