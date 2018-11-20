import React from 'react';
import { Formik, Form, Field } from 'formik';


const PermanentOrFamilyHomeForm = ({ initialValues, onSubmit, addressLine1 }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
    >
        {({ isSubmitting, values, setFieldValue }) => (
            <Form className="form qa-questionnaire-form" role="form" method="POST" autoComplete="off" noValidate="">


                <div className="group" id="who-lives-here">
                    <div className="block" id="permanent-or-family-home">
                        <div className="question" id="permanent-or-family-home-question">
                            <h1 className="question__title saturn" data-qa="question-title">
                                Does anyone live at <em>{addressLine1}</em> as their permanent or family home?
                            </h1>

                            <aside className="question__guidance">
                                <div className="panel panel--simple panel--info" id="question-guidance-permanent-or-family-home-question">
                                    <strong className="u-mb-s u-d-b">Include</strong>
                                    <ul className="mars">
                                        <li>yourself, if this is your permanent or family home</li>
                                        <li>family members including partners, children and babies born on or before 9
                                    April 2017</li>
                                        <li>students and, or school children who live away from home during term time</li>
                                        <li>housemates tenants or lodgers</li>

                                    </ul>
                                </div>
                            </aside>

                            <div className="question__answers">
                                <div className="question__answer">
                                    <div className="answer answer--radio  " id="container-permanent-or-family-home-answer">
                                        <div className="answer__fields js-fields">
                                            <div className="field field--radio field--multiplechoice ">
                                                <fieldset>

                                                    <legend className="field__legend mars u-vh">
                                                        Does anyone live at <em>Deirdre Rivera</em> as their permanent or
                                                family home?</legend>

                                                    <div className="field__item js-focusable-box">
                                                        <Field
                                                            className="input input--radio "
                                                            value="Yes"
                                                            type="radio"
                                                            name="permanent-or-family-home-answer"
                                                            id="permanent-or-family-home-answer-0"
                                                            data-qa="input-text"
                                                            checked={values['permanent-or-family-home-answer'] === 'Yes'}
                                                            onChange={() => {
                                                                setFieldValue('permanent-or-family-home-answer', 'Yes')
                                                            }}
                                                        />
                                                        <label className="label label--inline venus" htmlFor="permanent-or-family-home-answer-0"
                                                            id="label-permanent-or-family-home-answer-0">

                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="field__item js-focusable-box">
                                                        <Field
                                                            className="input input--radio "
                                                            value="No"
                                                            type="radio"
                                                            name="permanent-or-family-home-answer"
                                                            id="permanent-or-family-home-answer-1"
                                                            data-qa="input-text"
                                                            checked={values['permanent-or-family-home-answer'] === 'No'}
                                                            onChange={() => {
                                                                setFieldValue('permanent-or-family-home-answer', 'No')
                                                            }}
                                                        />
                                                        <label className="label label--inline venus" htmlFor="permanent-or-family-home-answer-1"
                                                            id="label-permanent-or-family-home-answer-1">

                                                            No
                                                            <br />
                                                            <span className="label__description label__inner pluto">For example
                                                        this is a second address or holiday home</span>
                                                        </label>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div className="guidance js-details" data-show-label="Show further guidance"
                                            data-hide-label="Hide further guidance">
                                            <a className="guidance__link js-details-trigger js-details-label mars" href="#guidance-permanent-or-family-home-answer"
                                                id="guidance-permanent-or-family-home-answer-trigger" aria-controls="guidance-permanent-or-family-home-answer-body"
                                                aria-expanded="false" data-guidance-trigger="true" data-ga="click"
                                                data-ga-category="Help" data-ga-action="Guidance click" data-ga-label="permanent-or-family-home-answer">Show
                                        further guidance</a>
                                            <div className="guidance__main js-details-body" id="guidance-permanent-or-family-home-answer-body"
                                                aria-hidden="true">
                                                <div className="guidance__content mars">
                                                    <p>For most people, their permanent home will be the address where they
                                                spend the most time.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className={"btn btn--loader" + (isSubmitting ? ' is-loading' : '')} data-qa="btn-submit" type="submit" name="action[save_continue]">Save and continue</button>

                <div className="u-mb-m">
                    <button className="btn btn--secondary js-btn-save" data-qa="btn-save-sign-out" type="submit" name="action[save_sign_out]"
                        data-ga="click" data-ga-category="Navigation" data-ga-action="Save and complete later click">Save
                and complete later</button>
                </div>

            </Form>
        )}
    </Formik>
)

export default PermanentOrFamilyHomeForm;
