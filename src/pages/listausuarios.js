import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions/useractions';
import UserList from '../components/userlist';

const ListaUsuarios = () => {

    useEffect(() => {
      fetchUsers()
    }, [])

    return (
      <div>
        <h1>Lista de usuários</h1>
        <UserList contacts={this.props.contacts} loading={this.props.loading} errors={this.props.errors} deleteContact={this.props.deleteContact}/>
      </div>
    )
}

function mapStateToProps(state) {
  return {
      users : state.contactStore.users,
      loading: state.contactStore.loading,
      errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {fetchUsers, deleteUser})(ListaUsuarios);