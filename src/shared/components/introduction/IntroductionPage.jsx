import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getNextRoute} from '../routing';

const Introduction = ({location}) => (
    <div className="grid grid--reverse">
        <div className="grid__col col-4@m">

        </div>

        <div className="grid__col col-7@m pull-1@m">
            <main role="main" id="main" className="page__main">

                <div>
                    <h2 className="saturn">Welcome to the Census Test.</h2>
                    <p className="mars">Include everyone living and staying overnight in your household. </p>
                    <p> Fill it in as soon as possible, but answer it about 25 June 2018.</p>
                    <p> The information helps councils and the government plan and fund
                        services in your community - services like GPs, hospitals, schools and
                    public transport. </p>
                    <p>Everyone must be included on a Census form. </p>

                    <div className="panel panel--info panel--spacious panel--simple u-mb-l">
                        <h3 className="neptune">Start or continue to fill in the Census</h3>
                        <h4 className="venus"> Enter your 20 digit unique access code </h4>
                        <p className="mars">You can find your unique access code on your invitation letter.</p>
                        <input id="access-code" className="input input--text " defaultValue="" data-qa="input-text"
                            name="access-code" />
                        <a href="http://www.ons.gov.uk/census/help" target="_blank">Help finding your
                        access code</a>
                    </div>
                    <form action="" className="form" role="form" method="POST" autoComplete="off" noValidate>
                        <Link to={getNextRoute(location.pathname)}>
                            <button className="btn qa-btn-get-started" type="submit" name="action[start_questionnaire]">Start survey</button>
                        </Link>
                    </form>
                    <div className="venus lock__text">
                        <p>Important: Your response is legally required</p>
                    </div>

                    <p className="mars">You could be fined if you do not participate or if you supply false
                information. </p>
                    <p>Your personal information is protected by law. Census information is kept
                confidential for 100 years.</p>
                    <p>Census information helps government check that services are fair to everyone. This
                is called equality monitoring.</p>

                    <a href="http://www.ons.gov.uk/census/help" target="_blank">Need help? More information
                about the Census</a>
                </div>
            </main>
        </div>
    </div>
)

export default connect()(Introduction);