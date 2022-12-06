import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function UserCard({user, deleteUser}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {user.name.firstname} {user.name.lastname}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {user.phone}</p>
          <p><Icon name='mail outline'/> {user.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/contacts/edit/${user.id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteUser(user.id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

UserCard.propTypes = {
  user: React.PropTypes.object.isRequired
}
