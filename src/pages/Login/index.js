import React from 'react';
import { CssLogin } from './style';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <CssLogin>
            <section>
                <form>
                    <div className="divLb1">
                        <label>Nome:</label>
                    </div>
                    <input type="text" required placeholder="Seu nome aqui"></input>
                    <div className="divLb2">
                        <label>Senha:</label>
                    </div>
                    <input type="password" required placeholder="Sua senha aqui"></input>
                    <div className="divdoBotao">
                        <Link to="../">
                            <div className="divBotao">
                                <p>ENTRAR</p>
                            </div>
                        </Link>
                    </div>

                    <nav>
                        <Link to="../ForgotThePassword">
                            <p>Esqueceu sua senha?</p>
                        </Link>
                        <Link to="../SingUp">
                            <p>Cadastre-se!</p>
                        </Link>
                    </nav>


                </form>
            </section>
        </CssLogin>
    );
}
