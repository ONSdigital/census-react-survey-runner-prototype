import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Introduction from './introduction/IntroductionPage';
import YourAddress from './your-address/YourAddressPage';
import WhoLivesHereIntro from './who-lives-here-intro/WhoLivesHereIntroPage';
import PermanentOrFamilyHomePage from './permanent-or-family-home/PermanentOrFamilyHomePage';
import Confirmation from './confirmation/ConfirmationPage';
import Status from './Status';

const AppDisplay = () => (
    <div>
        <Status></Status>
        <Route path="/introduction" component={Introduction} />
        <Route path="/what-is-your-address" component={YourAddress}/>
        <Route path="/who-lives-here-intro" component={WhoLivesHereIntro}/>
        <Route path="/permanent-or-family-home" component={PermanentOrFamilyHomePage}/>
        <Route path="/confirmation" component={Confirmation}/>
    </div>
);
if (module.hot) {
    module.hot.accept('./App', ()=>{
        const NextApp = require('./App').default;
        render(NextApp);
    })
}

const mapStateToProps = (state, ownProps)=>{
    return {
        ...state
    }
};

export default connect(mapStateToProps)(AppDisplay);
