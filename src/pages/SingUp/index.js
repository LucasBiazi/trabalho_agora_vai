import React from 'react';
import { CssSu } from './style';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <CssSu>
            <section>
                <form>
                    <label>Nome</label>
                    <input type="text" required placeholder="Nome"></input>
                    <label>Senha</label>
                    <input type="password" required placeholder="Senha"></input>
                    <label>Email</label>
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
