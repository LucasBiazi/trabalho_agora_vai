import React from 'react';
import { CssSu } from './style';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <CssSu>
            <section>
                <form>
                    <div className="main_div">
                        <div className="div_dos_label">
                            <label>Nome:</label>
                        </div>
                        <input type="text" required placeholder="Nome"></input>
                        <div className="div_dos_label ajuste">
                            <label>Senha:</label>
                        </div>
                        <input type="password" required placeholder="Senha"></input>
                        <div className="div_dos_label ajuste">
                            <label>Email:</label>
                        </div>
                        <input type="text" required placeholder="E-mail"></input>
                    </div>
                    <div className="doisBtn">
                        <Link to="../">
                            <div className="divBotao">
                                <p>CADASTRAR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="div_link">
                        <Link to="../">
                            <p>INÍCIO</p>
                        </Link>
                    </div>
                </form>
            </section>
        </CssSu>
    );
}
