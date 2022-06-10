import pagesStatus from '../../static/pages_status.json';

import produtorOtimistaStyles from '../../assets/css/produtorotimista.module.css';

const ProdutorOtimistaHomepage = () => {
    const setMaintenancePage = () => {
        var MaintenancePage = require('../maintenance');
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        document.documentElement.className = produtorOtimistaStyles["produtorotimista-start-code"];
        document.body.className = produtorOtimistaStyles["produtorotimista-start-code"];
        document.body.id = produtorOtimistaStyles["produtorotimista-body"];
        var home = require('./home');
        return home.default();
    };
    let BodyComponent = null;
    if(pagesStatus.poBlogIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default ProdutorOtimistaHomepage;