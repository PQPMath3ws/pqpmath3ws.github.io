import pagesStatus from '../static/pages_status.json';

const PaginaPrincipal = () => {
    const setMaintenancePage = () => {
        require('../assets/css/maintenance.css');
        var MaintenancePage = require('./maintenance');
        document.body.id = "maintenance-body";
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        return (
            <div><p>Em construção...</p></div>
        );
    };
    let BodyComponent = null;
    if(pagesStatus.homeIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default PaginaPrincipal;