import styled from "styled-components";
import imagem from '../../assets/ba.jpg';
import imagem2 from '../../assets/su.jpg';

export const CssSu = styled.div`
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
}
.main_div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: inherit;
    margin-top: 10px;
}
.div_dos_label{
    display: flex;
    width: 580px;
    justify-content: flex-start;
}
.ajuste{
    margin-top: 20px;
}
label{
    color: white;
    font-size: 18px;    
}
.divBotao{
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 7px;
    height: 40px;
    width: 140px;
}
.doisBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    margin-top: 50px;
}
input{
    text-indent: 10px;
    font-size: 18px;
    width: 580px;
    height: 30px;
    border-radius: 10px;
    color: black;
    cursor: text;
}
a{
    font-size: 10px;
    color: white;
    text-decoration: none;
    cursor: pointer;
}
.div_link{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: inherit;
    height: inherit;
    margin-bottom: 10px;
}
p{    
    font-size: 18px;
}

    @media only screen and (max-width: 850px) {

    section{
    background-image: url(${imagem2});
    height: 100%;
    width: 100%;
    }
    .div_dos_label{
        width: 300px;
    }
    label{
        font-size: 25px;
    }
    form{
        background: rgb(000,000,000, 15%);
        display: flex;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;  
    }
    input{
    width: 300px;
    border-radius: 10px;
    color: black;
    }
    .doisBtn{
        justify-content: space-around;
    }
    }
`;
