import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserCard from './usercard';

export default function UserList({users, loading, deleteUser}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return users.map(user => {
      return (
        <UserCard key={user.id} user={user} deleteUser={deleteUser} />
      )
    })
  }

  const userList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { users.length > 0 && userList }
    </div>
  )
}
