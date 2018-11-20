import React from 'react';
import { Formik, Form, Field } from 'formik';
import fetch from 'isomorphic-fetch';


const YourAddressForm = ({initialValues, onSubmit}) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className="form qa-questionnaire-form" role="form" method="POST" autoComplete="off" noValidate="">
                <div className="group" id="what-is-your-address-group">
                    <div className="block" id="what-is-your-address">
                        <div className="question" id="what-is-your-address-question">

                            <h1 className="question__title saturn" data-qa="question-title">
                                What is your address?
                            </h1>

                            <fieldset className="question__fieldset js-question-fieldset">
                                <legend className="u-vh">What is your address?</legend>

                                <div className="question__answers">

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-address-line-1">
                                            <div className="answer__fields js-fields">

                                                <div className="field">
                                                    <label className="label venus " htmlFor="address-line-1" id="label-address-line-1">
                                                        Address Line 1 (Including your house name or number)
                                            </label>

                                                    <Field
                                                        className="input input--text "
                                                    
                                                        name="address-line-1"
                                                        id="address-line-1"
                                                        data-qa="input-text"
                                                        style={{
                                                            backgroundImage: 'url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;)',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundAttachment: 'scroll',
                                                            backgroundSize: '16px 18px',
                                                            backgroundPosition: '98% 50%',
                                                            cursor: 'auto'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-address-line-2">
                                            <div className="answer__fields js-fields">
                                                <div className="field">
                                                    <label className="label venus " htmlFor="address-line-2" id="label-address-line-2">
                                                        Address Line 2
                                            </label>
                                                    <Field className="input input--text " name="address-line-2" id="address-line-2" data-qa="input-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-address-line-3">
                                            <div className="answer__fields js-fields">
                                                <div className="field">
                                                    <label className="label venus " htmlFor="address-line-3" id="label-address-line-3">
                                                        Address Line 3
                                            </label>
                                                    <Field className="input input--text " name="address-line-3" id="address-line-3" data-qa="input-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-town-city">
                                            <div className="answer__fields js-fields">
                                                <div className="field">
                                                    <label className="label venus " htmlFor="town-city" id="label-town-city">
                                                        Town/City

                                            </label>

                                                    <Field className="input input--text " name="town-city" id="town-city" data-qa="input-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-county">
                                            <div className="answer__fields js-fields">
                                                <div className="field">
                                                    <label className="label venus " htmlFor="county" id="label-county">
                                                        County
                                            </label>
                                                    <Field className="input input--text " name="county" id="county" data-qa="input-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-postcode">
                                            <div className="answer__fields js-fields">
                                                <div className="field">
                                                    <label className="label venus " htmlFor="postcode" id="label-postcode">
                                                        Postcode
                                        </label>
                                                    <Field className="input input--text " name="postcode" id="postcode" data-qa="input-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="question__answer">
                                        <div className="answer answer--textfield  " id="container-country">
                                            <div className="answer__fields js-fields">
                                                <div className="field">
                                                    <label className="label venus " htmlFor="country" id="label-country">
                                                        Country
                                                    </label>
                                                    <Field className="input input--text " name="country" id="country" data-qa="input-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </div>
                    </div>
                </div>
                <button className={"btn btn--loader" + (isSubmitting ? ' is-loading' : '')} data-qa="btn-submit" type="submit" name="action[save_continue]">Save and continue</button>

                <div className="u-mb-m">
                    <button className="btn btn--secondary js-btn-save" data-qa="btn-save-sign-out" type="submit" name="action[save_sign_out]" data-ga="click" data-ga-category="Navigation" data-ga-action="Save and complete later click">Save and complete later</button>
                </div>
            </Form>
        )}
    </Formik>
)

export default YourAddressForm;
