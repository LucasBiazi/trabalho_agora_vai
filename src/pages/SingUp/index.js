import React from 'react';
import { CssSu } from './style';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <CssSu>
            <section>
                <form>
                    <div className="ajuste">
                        <label>Nome:</label>
                    </div>
                    <input type="text" required placeholder="Nome"></input>
                    <div className="ajuste">
                        <label>Senha:</label>
                    </div>
                    <input type="password" required placeholder="Senha"></input>
                    <div className="ajuste">
                        <label>Email:</label>
                    </div>
                    <input type="password" required placeholder="E-mail"></input>
                    <div className="doisBtn">
                        <Link to="../">
                            <div className="divBotao">
                                <p>CADASTRAR</p>
                            </div>
                        </Link>
                        <Link to="../">
                            <div className="divBotao">
                                <p>INÍCIO</p>
                            </div>
                        </Link>
                    </div>
                </form>
            </section>
        </CssSu>
    );
}
