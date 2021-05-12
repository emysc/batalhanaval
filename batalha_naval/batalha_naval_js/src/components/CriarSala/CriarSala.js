import "../Chat/Chat.css";
import React from "react";
import { withRouter } from "react-router-dom";
import { dispatchSelectedUser } from "../../redux/actions/index";
import { connect } from "react-redux";
import { compose } from "redux";

class CriarSala extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userNameForChat: "" };
  }

  updateInput = (inputValue) => {
    this.setState({ userNameForChat: inputValue });
  };

  handleSubmit = () => {
    if ("".concat(this.state.userNameForChat).trim().length > 0) {
      this.props.dispatchSelectedUser({
        nome: this.state.userNameForChat,
        uuid: 123, //TODO remover isso e por lógica
      });
      this.props.history.push("/app");
    }
  };

  render() {
    return (
      //   <div>
      //     <div id="batalha_h1">
      //       <h1>Negão do zap</h1>
      //     </div>
      //     <div id="buttons">
      //       {/* <a href="../src/components/Home/Home.js"> */}
      //       <button id="criar_sala" type="button">
      //         <h2> Criar Sala</h2>
      //       </button>
      //       {/* </a> */}
      //       <button id="buscar_sala" type="button">
      //         <h2>comer anjinho</h2>
      //       </button>
      //     </div>
      //   </div>

      <form id="login">
        <input
          required
          type="text"
          name="username"
          onChange={(e) => this.updateInput(e.target.value)}
          placeholder="digite seu usuário"
        />
        <button onClick={this.handleSubmit} type="button">
          Entrar no chat!
        </button>
      </form>
    );
  }
}

/* function matchDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchUser: selectUser }, dispatch);
} */

export default compose(
  withRouter,
  connect(null, { dispatchSelectedUser })
)(CriarSala);

/* const withRouterComponent = withRouter(paginaInicial);
export default connect(matchDispatchToProps)(withRouterComponent); */
