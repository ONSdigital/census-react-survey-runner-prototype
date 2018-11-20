import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PermanentOrFamilyHomeForm from './permanent-or-family-home-form';
import {QuestionPage, mapStateToProps, mapDispatchToProps} from '../QuestionPage';
import {getPreviousRoute} from '../routing';

class PermanentOrFamilyHomePage extends QuestionPage {
    constructor(props, context) {
        super(props, context);
        this.pageAnswerIds = ["permanent-or-family-home-answer"]
    }

    render() {
        return (
            <div className="grid__col col-7@m pull-1@m">
                <main role="main" id="main" className="page__main">
                <PermanentOrFamilyHomeForm
                    initialValues={this.getPageAnswers()}
                    onSubmit={this.saveAnswers}
                    addressLine1={this.getAddress()}
                ></PermanentOrFamilyHomeForm>
                <Link to={getPreviousRoute(this.props.location.pathname)} className="page__previous page__previous--bottom" data-ga="click" data-ga-category="Navigation" data-ga-action="Previous link click" data-ga-label="bottom" href="/" id="bottom-previous">
                Previous
                </Link>
                </main>
            </div>
        );
    }

    getAddress() {
        const addressLine1Answer = this.props.answers['address-line-1'];
        if (addressLine1Answer) {
            return addressLine1Answer.value;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PermanentOrFamilyHomePage);
