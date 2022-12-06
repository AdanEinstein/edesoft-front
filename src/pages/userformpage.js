import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUser, newUser, saveUser, updateUser } from '../actions/useractions';
import UserForm from '../components/userform';


const UserFormPage = ({...props}) => {

  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const { id } = props.match.params;
    if(id){
      fetchUser(id)
    } else {
      newUser();
    }
  }, [])

  const submit = (user) => {
    if(!user.id) {
      return this.props.saveUser(user)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(props.errors)
         })
    } else {
      return props.updateUser(user)
        .then(response => setRedirect(true))
        .catch(err => {
           throw new SubmissionError(props.errors)
         })
    }
  }

    return (
      <div>
        {
          redirect ?
          <Redirect to="/" /> :
          <UserForm user={props.user} loading={props.loading} onSubmit={submit} />
        }
      </div>
    )
}

function mapStateToProps(state) {
  return {
    user: state.contactStore.user,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {newUser, fetchUser, updateUser, saveUser})(UserFormPage);
