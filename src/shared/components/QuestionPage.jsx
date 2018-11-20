import React from 'react';
import {bindActionCreators} from 'redux';
import {getNextRoute} from './routing';
import {assign, assignWith, fromPairs} from 'lodash';
import * as answerActions from '../actions/answers';


export class QuestionPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.pageAnswerIds = []; // override me
        this.saveAnswers = this.saveAnswers.bind(this);
    }

    saveAnswers(values, {setSubmitting}) {
        // timestamp newly-updated answers
        const answers = {};
        const timestamp = new Date().toISOString();
        assignWith(answers, values, (objValue, srcValue) => {
            return {
                value: srcValue,
                timestamp: timestamp
            };
        });

        this.props.actions.savePageAnswers(answers);

        // TODO: local storage & encryption
        setSubmitting(false);

        // TODO: background logic
        this.props.actions.saveAnswersToIndexedDB();

        this.props.history.push(getNextRoute(this.props.location.pathname));
    }

    getPageAnswers() {
        const pageAnswers = {};
        this.pageAnswerIds.forEach(answerId => {
            let answerObj = this.props.answers[answerId];
            pageAnswers[answerId] = answerObj ? answerObj.value : '';
        })
        console.log('pageAnswers', pageAnswers);
        return pageAnswers;
    }
}

export const mapStateToProps = ({answerStore})=>(answerStore);
export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(answerActions, dispatch)
    };
};