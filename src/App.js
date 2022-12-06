import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ListaUsuarios from "./pages/listausuarios";
import UserFormPage from "./pages/userformpage";

export default function App() {
	return (
		<Container>
			<div className="ui two item menu">
				<NavLink className="item" activeClassName="active" exact to="/">
					Lista de usuários
				</NavLink>
				<NavLink
					className="item"
					activeClassName="active"
					exact
					to="/contacts/new"
				>
					Adicionar usuário
				</NavLink>
			</div>
			<Route exact path="/" component={ListaUsuarios} />
			<Route path="/users/novo" component={UserFormPage} />
			<Route path="/users/editar/:id" component={UserFormPage} />
		</Container>
	);
}
