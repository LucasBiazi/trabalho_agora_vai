import React from 'react';
import { CssLogin } from './style';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <CssLogin>
            <section>
                <form>
                    <label>Nome</label>
                    <input type="text" required placeholder="Nome"></input>
                    <label>Senha</label>
                    <input type="password" required placeholder="Senha"></input>
                    <Link to="../">
                        <div className="divBotao">
                            <p>ENTRAR</p>
                        </div>
                    </Link>

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
