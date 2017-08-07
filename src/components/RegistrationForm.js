import React from 'react'

class RegistrationForm extends React.Component {
  render() {
    return (
        <form>
          <input type="text"></input>
          <input type="password" hintText="Password"></input>
          <button type="submit">Submit</button>
        </form>
    );
  }
}


export default RegistrationForm;
