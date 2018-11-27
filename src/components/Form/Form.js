import React from 'react';
import formService from '../../services/formService';
import { trackGA } from '../../utils/analytics';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false,
            submitted: false,
            form: {
                name: '',
                email: '',
                phone: '',
                zip: '',
            },
            params: {},
            touched: {
                name: false,
                email: false,
                phone: false,
                zip: '',
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    focusForm() {
        if (!this.state.submitted) {
            this.nameRef.focus();
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.isFormValid(this.state.form)) {
            this.setState({
                touched: {
                    name: true,
                    email: true,
                    phone: true,
                    zip: true,
                },
            });
        } else {
            this.setState({ loading: true });

            formService
                .postFormData({
                    ...this.state.form,
                })
                .then(res => {
                    console.info('Success!', res);
                    trackGA('Consumer_Affairs', 'Form Button', 'Form Submission - View Homes');

                    this.setState({
                        loading: false,
                        submitted: true,
                        error: false,
                    });
                })
                .catch(err => {
                    console.error('Error!', err);
                    this.setState({
                        loading: false,
                        error: true,
                    });
                });
        }
    }

    handleBlur(field) {
        return () => {
            this.setState({
                touched: {
                    ...this.state.touched,
                    [field]: true,
                },
            });
        };
    }

    handleInputChange(field) {
        return event => {
            this.setState({
                form: {
                    ...this.state.form,
                    [field]: event.target.value,
                },
            });
        };
    }

    isFormValid({ name, email, phone, zip }) {
        return (
            !!name.length &&
            !!email.length &&
            !!email.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) &&
            !!phone.length &&
            !!phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/) &&
            !!zip.length
        );
    }

    render() {
        const validators = {
            name: !!this.state.form.name.length,
            email:
            !!this.state.form.email.length &&
            !!this.state.form.email.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ),
            phone:
            !!this.state.form.phone.length &&
            !!this.state.form.phone.match(
                /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
            ),
            zip: !!this.state.form.zip.length,
        };

        const formValid = Object.keys(validators).reduce(
            (prev, key) => prev && !!validators[key],
            true
        );
        const formTouched = Object.keys(this.state.touched).reduce(
            (prev, key) => prev && !!this.state.touched[key],
            true
        );

        const addErrorClass = field => {
            return !validators[field] && !!this.state.touched[field]
                ? 'is-invalid'
                : '';
        };

        return (
            <div className="form-wrapper">

                {this.state.loading ? (
                    <div className="disabled-overlay">
                        <div className="overlay-text">Submitting...</div>
                        <div className="overlay-spinner" />
                    </div>
                ) : null}

                {this.state.error ? (
                    <div className="error-message">
                        There was an error submitting your request. Please try again.
                    </div>
                ) : null}

                {!this.state.submitted ? (
                    <div>
                        <p>Fill out the form to receive more information about Clayton Built&reg; homes and be contacted by a Clayton representative</p>
                    <form className="LeadForm" onSubmit={this.handleSubmit} noValidate>
                        <fieldset disabled={this.state.loading}>
                        <div className="form-row">
                            <div className="form-name">
                                <input
                                id="name"
                                ref={ref => {
                                    this.nameRef = ref;
                                }}
                                value={this.state.form.name}
                                onBlur={this.handleBlur('name')}
                                onChange={this.handleInputChange('name')}
                                autoComplete="name"
                                required
                                type="text"
                                placeholder="Full Name*"
                            />
                                <div className={'form-invalid-feedback ' + addErrorClass('name')}>Please add your full name</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-email">
                                <input
                                id="email"
                                value={this.state.form.email}
                                onBlur={this.handleBlur('email')}
                                onChange={this.handleInputChange('email')}
                                autoComplete="email"
                                required
                                type="email"
                                placeholder="Email*"
                            />
                                <div className={'form-invalid-feedback ' + addErrorClass('email')}>
                                    Please add a valid email address
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-zip">
                                <input
                                value={this.state.form.zip}
                                onBlur={this.handleBlur('zip')}
                                onChange={this.handleInputChange('zip')}
                                autoComplete="zip"
                                required
                                id="zip"
                                placeholder="Zip*"
                            />
                                <div className={'form-invalid-feedback ' + addErrorClass('zip')}>
                                    Please add a valid zip
                                </div>
                            </div>

                            <div className="form-phone">
                                <input
                                    value={this.state.form.phone}
                                    onBlur={this.handleBlur('phone')}
                                    onChange={this.handleInputChange('phone')}
                                    autoComplete="tel"
                                    required
                                    type="tel"
                                    id="phone"
                                    placeholder="Phone*"
                                />
                                <div className={'form-invalid-feedback ' + addErrorClass('phone')}>
                                    Please add a valid phone&nbsp;number
                                </div>
                            </div>
                        </div>

                        <p className="required-text">*All form fields are required!</p>

                        <div className="form-row">
                            <label />
                            <button disabled={formTouched && !formValid} type="submit">
                                View Homes
                            </button>
                        </div>
                        </fieldset>
                    </form>
                    </div>
                ) : (
                    <div className="thank-you">
                        <h4>
                            Thank you!<br />
                            Your information was submitted.<br />

                            <a className="submit-btn" href={'https://www.claytonhomes.com/find-a-home/city--st--' + this.state.form.zip}>
                                View Homes
                            </a>
                        </h4>
                    </div>
                )}

            </div>
        );
    }
}

export default Form;
