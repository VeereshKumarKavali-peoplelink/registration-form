// Write your JS code here
import {useState} from 'react'

import './index.css'

const RegistrationForm = () => {

    const [firstNameInput, setFirstNameInput] = useState('')
    const [lastNameInput, setLastNameInput] = useState('')
    const [showFirstNameError, setShowFirstNameError] = useState(false)
    const [showLastNameError, setShowLastNameError] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
 

  const onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      setIsFormSubmitted(true)
    } else {

        setShowFirstNameError(!isValidFirstName)
        setShowLastNameError(!isValidLastName)
        setIsFormSubmitted(false)
    }
  }

  const validateLastName = () => {
    
    return lastNameInput !== ''
  }

  const onBlurLastName = () => {
    const isValidLastName = validateLastName()
    setShowLastNameError(!isValidLastName)
   
  }

  const onChangeLastName = event => {
    setLastNameInput(event.target.value)
   
  }

  const validateFirstName = () => {
   
    return firstNameInput !== ''
  }

  const onBlurFirstName = () => {
    const isValidFirstName = validateFirstName()
    setShowFirstNameError(!isValidFirstName)
    
  }

  const onChangeFirstName = event => {
    setFirstNameInput( event.target.value)
  }

  const onClickSubmitAnotherResponse = () => {
    setIsFormSubmitted(false)
    setFirstNameInput('')
    setLastNameInput('')
  }

  const renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  const renderLastNameField = () => {
    
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={onChangeLastName}
          onBlur={onBlurLastName}
        />
      </div>
    )
  }

  const renderFirstNameField = () => {
   
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onBlur={onBlurFirstName}
          onChange={onChangeFirstName}
        />
      </div>
    )
  }

  const renderRegistrationForm = () => {
    
    return (
      <form className="form-container" onSubmit={onSubmitForm}>
        {renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  
   
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? renderSubmissionSuccessView()
            : renderRegistrationForm()}
        </div>
      </div>
    )
  
}

export default RegistrationForm
