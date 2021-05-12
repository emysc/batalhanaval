import "../Chat/Chat.css";
import React from "react";
import { withRouter } from "react-router-dom";
import { dispatchSelectedUser } from "../../redux/actions/index";
import { connect } from "react-redux";
import { compose } from "redux";

class BuscarSala extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { userNameForChat: "" };
  // }

  // updateInput = (inputValue) => {
  //   this.setState({ userNameForChat: inputValue });
  // };

  // handleSubmit = () => {
  //   if ("".concat(this.state.userNameForChat).trim().length > 0) {
  //     this.props.dispatchSelectedUser({
  //       nome: this.state.userNameForChat,
  //       uuid: 123, //TODO remover isso e por lógica
  //     });
  //     this.props.history.push("/app");
  //   }
  // };

  render() {
    return (
      <form id="login">
        {/* <input
          required
          type="text"
          name="username"
          onChange={(e) => this.updateInput(e.target.value)}
          placeholder="digite seu usuário"
        /> */}
        <button type="button">Entrar no chat!</button>
      </form>
    );
  }
} //buscar pelo id da sala, então tem que dar um id para cada sala( isso vai ser um pouco difícil)

/* function matchDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchUser: selectUser }, dispatch);
} */

export default compose(
  withRouter,
  connect(null, { dispatchSelectedUser })
)(BuscarSala);

/* const withRouterComponent = withRouter(paginaInicial);
export default connect(matchDispatchToProps)(withRouterComponent); */
