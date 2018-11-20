import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import YourAddressForm from './your-address-form';
import {QuestionPage, mapStateToProps, mapDispatchToProps} from '../QuestionPage';
import {getPreviousRoute} from '../routing';

class YourAddress extends QuestionPage {
    constructor(props, context) {
        super(props, context);

        this.pageAnswerIds = [
            "address-line-1",
            "address-line-2",
            "address-line-3",
            "town-city",
            "county",
            "postcode",
            "country",
        ]
    }

    render() {
        return (
            <div className="grid__col col-7@m pull-1@m">
                <main role="main" id="main" className="page__main">
                <YourAddressForm initialValues={this.getPageAnswers()} onSubmit={this.saveAnswers}></YourAddressForm>
                <Link to={getPreviousRoute(this.props.location.pathname)} className="page__previous page__previous--bottom" data-ga="click" data-ga-category="Navigation" data-ga-action="Previous link click" data-ga-label="bottom" href="/" id="bottom-previous">
                Previous
                </Link>
                </main>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourAddress);
