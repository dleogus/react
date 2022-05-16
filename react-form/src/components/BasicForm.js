import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredFirstNameIsTouched, setEnterFirstNameIsTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
  const firstNameInputIsInvalid = !enteredFirstNameIsValid && enteredFirstNameIsTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== '';
  const lastNameInputIsInvalid = !enteredLastNameIsValid && enteredLastNameIsTouched;

  const enteredEmailisValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailisValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailisValid) {
    formIsValid= true;
  };
  
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const firstNameBlurChangeHandler = (event) => {
    setEnterFirstNameIsTouched(true);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameBlurChangeHandler = (event) => {
    setEnteredLastNameIsTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterFirstNameIsTouched(true);
    setEnteredLastNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailisValid) {
      return;
    }
    
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredEmail('');
    setEnterFirstNameIsTouched(false);
    setEnteredLastNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  }

  const firstNameClasses = firstNameInputIsInvalid 
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = lastNameInputIsInvalid 
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurChangeHandler}
            value={enteredFirstName}
           />
          {firstNameInputIsInvalid && <p className='error-text'>FirstName must not be empty.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurChangeHandler}
            value={enteredLastName}
          />
          {lastNameInputIsInvalid && <p className='error-text'>LastName must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text'
          id='name' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
