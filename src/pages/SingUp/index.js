import styled from "styled-components";
import imagem from '../../assets/ba.jpg';
import imagem2 from '../../assets/su.jpg';

export const CssSu = styled.div`
*{
    margin: 0;
    padding:0;
}
section{
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background-image: url(${imagem});
}
form{
    display: flex;
    flex-direction: column;
    height:100vh;
    width: 700px;
    background: rgb(000,000,000, 45%);
    justify-content: center;
    align-items: center;
    align-content:center;
}
.ajuste{
    width: 670px;
    justify-content: flex-start;
    margin-left: 30px;
}
label{
    margin-left: 10px;
    color: white;
    font-size: 22px;
    padding: 10px;
}
input{
    width: 600px;
    border-radius: 10px;
    color: black;
    cursor: text;
}
.doisBtn{
    height: 310px;
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
}
.divBotao{
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 7px;
    height: 50px;
    width: 150px;
}
a{
    font-size: 10px;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

    @media only screen and (max-width: 850px) {

    section{
        background-image: url(${imagem2});
        height: 100%;
        width: 100%;
    }
    form{
        background: rgb(000,000,000, 15%);
        display: flex;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;  
    }
    .ajuste{
        width: 390px;
    }
    label{
        font-size: 30px;
    }
    input{
    width: 325px;
    border-radius: 10px;
    color: black;
    }
    .doisBtn{
        height: 470px;
        justify-content: space-around;
    }
    }
`;
    
