import {useEffect} from 'react';
import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClone, faMinus, faTimes} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    // *** ÉTAT LOCAL ***

    // *** EFFETS ***
    useEffect(() => {
        // Code à exécuter après le rendu initial

        return () => {
            // Code de nettoyage (désabonnement, etc.)

        };
    }, []); // Exécuter useEffect au changement d'état des variables renseignées


    // *** FONCTIONS ***
    const minimizeWindow = () => {
        console.log('Minimize');
        window.electron.minimize();
    };

    const maximizeWindow = () => {
        console.log('Maximize');
        window.electron.maximize();
    };

    const closeWindow = () => {
        console.log('Close');
        window.electron.close();
    };


    // *** AFFICHAGE DES ÉLÉMENTS GRAPHIQUES ***
    return (
        <div className="h-[32px] flex flex-row self-stretch justify-end drag">
            <div className="flex-1 self-stretch drag"/>
            <ul className="flex flex-row justify-end items-center no-drag">
                <li className="self-stretch flex flex-row justify-center items-center py-0 px-4 cursor-pointer hover:bg-white/50"
                    onClick={() => minimizeWindow()}>
                    <FontAwesomeIcon icon={faMinus} className="text-white"/>
                </li>

                <li className="self-stretch flex flex-row justify-center items-center py-0 px-4 cursor-pointer hover:bg-white/50"
                    onClick={() => maximizeWindow()}>
                    <FontAwesomeIcon icon={faClone} style={{transform: 'scaleX(-1) scaleY(-1)'}}
                                     className="text-white"/>
                </li>

                <li className="self-stretch flex flex-row justify-center items-center py-0 px-4 cursor-pointer text-white hover:bg-red-600"
                    onClick={() => closeWindow()}>
                    <FontAwesomeIcon icon={faTimes} className="text-white"/>
                </li>
            </ul>
        </div>
    );
};

export default Header;