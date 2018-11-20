import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getNextRoute} from '../routing';

const WhoLivesHereIntroPage = ({location}) => (
    <div className="grid__col col-7@m pull-1@m">
        <main role="main" id="main" className="page__main">
            <h1 className="saturn">People who live in the household</h1>
            <p className="mars">In this section, we’re going to ask you about the people that live at <em>Stacey Marshall</em>.</p>

            <h3 className="neptune">Information you need</h3>
            <ul className="mars"><li>Names of the people living in household and how they are related</li>
                <li>The number of visitors staying in the household on 29 November 2017</li>
            </ul>

            <form action="" className="form" role="form" method="POST" autoComplete="off" noValidate>
                <Link to={getNextRoute(location.pathname)}>
                    <button className="btn qa-btn-get-started" type="submit" name="action[start_questionnaire]">Save and continue</button>
                </Link>
            </form>

            <div className="u-mb-m">
                <button className="btn btn--secondary js-btn-save" data-qa="btn-save-sign-out" type="submit" name="action[save_sign_out]" data-ga="click" data-ga-category="Navigation" data-ga-action="Save and complete later click">Save and complete later</button>
            </div>
        </main>
    </div>
);

export default connect()(WhoLivesHereIntroPage);
