import { useSearchParams } from 'react-router-dom';

import musicsStyle from "../../assets/css/musics.module.css";
import pagesStatus from '../../static/pages_status.json';

const MusicasHomepage = () => {
    const [getSearchParams] = useSearchParams();
    console.log("1 - ");
    console.log(getSearchParams);
    const setMaintenancePage = () => {
        var MaintenancePage = require('../maintenance');
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        document.documentElement.className = musicsStyle["musics-start-code"];
        document.body.className = musicsStyle["musics-start-code"];
        document.body.id = musicsStyle["musics-body"];
        document.title = "PQPMath3ws | Músicas";
        const preSave = getSearchParams.get("preSave");
        if(parseInt(preSave) === 1) {
            /*
            var PreSaveMusics = require('./pre_save_musics');
            return PreSaveMusics.default();
            */
            var MaintenancePage = require('../maintenance');
            return MaintenancePage.default();
        }
        else {
            var OldMusics = require('./old_musics');
            return OldMusics.default();
        }
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