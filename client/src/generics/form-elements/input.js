import PropTypes from "prop-types";
import React from "react";

class FormInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            validationMessage: '',
            isRequiredMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.checkIsRequired = this.checkIsRequired.bind(this);
        this.validate = this.validate.bind(this);
    };

    componentDidMount() {
        this.checkIsRequired(this.props.value || '');
    };

    handleChange(e) {
        this.checkIsRequired(e.target.value);
        this.validate(e.target.value);
        this.props.handleChange(e);
    };

    validate(input) { //debugger;
        if (this.props.validator) {
            let validate = this.props.validator(input);

            this.setState({
                validationMessage: validate.isValid ? '' : validate.message
            })

        }
    }

    checkIsRequired(input) {
        if (this.props.isRequired) {
            let isEmpty = input.length === 0
            this.setState({
                isRequiredMessage: isEmpty ? '* required' : ''
            })
        }
    }

    render() {
        const { validationMessage } = this.state;

        let validationStyle = {
            'display': this.state.validationMessage.length > 0
                ? 'block'
                : 'none'
        };

        let requiredStyle = {
            'display': this.state.isRequiredMessage.length > 0
                ? 'in-line'
                : 'none'
        };

        let formHtml;

        switch (this.props.type) {
            case 'dropdown':
                formHtml = <select value={this.props.value} name={this.props.name} onChange={(e) => { this.handleChange(e) }}>
                    {this.props.options.map((option, i) => {
                        return <option
                            key={`${i}-dropdown-${this.props.name}`}
                            value={option.value} >
                            {`${option.label}`}
                        </option>;
                    })}
                </select>;
                break;
            case 'textArea':
                formHtml = <textarea
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    name={this.props.name}
                    form="usrform"
                    value={this.props.value}
                    onChange={(e) => {
                        this.handleChange(e)
                    }}>
                </textarea>;
                break;
            default:
                formHtml = <input
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    group={this.props.group}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={(e) => {
                        this.handleChange(e)
                    }} />
        }

        return (

            <div className={`form__input-container --${this.props.className}`}>
                <label htmlFor={this.props.name}>
                    {/* {this.props.label} */}
                </label>
                {/* <span className="form__input-validation">
                    {this.state.isRequiredMessage}
                    {this.state.isRequiredMessage && this.state.validationMessage ? ', ' : ' '}
                    {this.state.validationMessage}
                    &nbsp;
          </span> */}
                {formHtml}
            </div>
        )
    };
};

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    validator: PropTypes.func
};

export default FormInput;