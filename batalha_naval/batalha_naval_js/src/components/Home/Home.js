import "../Chat/Chat.css";
import React from "react";
import { withRouter } from "react-router-dom";
import { dispatchSelectedUser } from "../../redux/actions/index";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="batalha_h1">
          <h1>Batalha Naval</h1>
        </div>
        <div id="buttons">
          {/* <a href="../src/components/Home/Home.js"> */}
          <button id="criar_sala" type="button">
            <Link to="/CriarSala">
              <h2> Criar Sala</h2>
            </Link>
          </button>
          {/* </a> */}

          <button id="buscar_sala" type="button">
            <Link to="/BuscarSala.js">
              <h2>Buscar sala</h2>
            </Link>
          </button>
        </div>
      </div>

      // <form id="login">
      //   <input
      //     required
      //     type="text"
      //     name="username"
      //     onChange={(e) => this.updateInput(e.target.value)}
      //     placeholder="digite seu usuário"
      //   />
      //   <button onClick={this.handleSubmit} type="button">
      //     Entrar no chat!
      //   </button>
      // </form>
    );
  }
}

/* function matchDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchUser: selectUser }, dispatch);
} */

export default compose(
  withRouter,
  connect(null, { dispatchSelectedUser })
)(Home);

/* const withRouterComponent = withRouter(paginaInicial);
export default connect(matchDispatchToProps)(withRouterComponent); */
