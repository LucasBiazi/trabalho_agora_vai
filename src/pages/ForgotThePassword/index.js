import React from 'react';
import { CssFTP } from './style';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <CssFTP>
            <section>
                <form>
                    <div className="divLb1">
                        <label className="lb1">Digite seu email:</label>
                    </div>
                    <input className="inemail" type="text" required placeholder="ex: x@gmail.com.br"></input>
                    <label className="lb2">Você vai receber um email com instruções para recuperar seu acesso.</label>
                    <button className="btnconf" type="submit">CONFIRMAR</button>
                    <div className="espaco"></div>
                    <Link to="../">
                        <div className="divBotao">
                            <p>INÍCIO</p>
                        </div>
                    </Link>
                </form>
            </section>
        </CssFTP>
    );
}
