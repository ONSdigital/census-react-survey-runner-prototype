import React from 'react';
import { connect } from 'react-redux';

const Confirmation = () => (
    <div className="grid__col col-7@m pull-1@m">
        <main role="main" id="main" className="page__main">
            <form className="form qa-questionnaire-form" role="form" method="POST" autoComplete="off" noValidate="">
                <div className="group" id="questionnaire-completed">
                    <div className="block" id="confirmation">
                        <p className="block__title neptune" data-qa="block-title">You’re ready to submit your 2019 Census Test</p>
                        <div className="block__description mars" data-qa="block-description"><p>Thank you for taking part in the 2019 Census Test.</p></div>
                        <div className="question" id="questionnaire-completed-question">
                            <aside className="question__guidance">
                                <div className="panel panel--simple panel--info" id="question-guidance-questionnaire-completed-question">
                                    <strong className="u-mb-s u-d-b">Please note:</strong>
                                    <ul className="mars"><li>by submitting your responses, you are declaring that you have completed to the best of your knowledge and belief.</li>
                                        <li>if you do not submit, your responses will be automatically submitted when the Census 2019 Test closes.</li>
                                        <li>after submission you will have an opportunity to provide feedback on your experience.</li>
                                    </ul>
                                </div>
                            </aside>
                            <div className="question__answers"></div>
                        </div>
                    </div>
                </div>

                <button className="btn  btn--loader js-btn-submit" data-qa="btn-submit" data-loading-msg="Submitting…" type="submit">Submit answers</button>

                <div className="u-mb-m">
                    <button className="btn btn--secondary js-btn-save" data-qa="btn-save-sign-out" type="submit" name="action[save_sign_out]" data-ga="click" data-ga-category="Navigation" data-ga-action="Save and complete later click">Save and complete later</button>
                </div>
            </form>
        </main>
    </div>
)

export default connect()(Confirmation);
