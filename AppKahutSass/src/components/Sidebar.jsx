import SocialNetworks from './SocialNetworksContainer';
import InformationContainer from './InformationContainer';

import Avatar from '../img/kahut.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="kahut_code" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    );
};

export default Sidebar;