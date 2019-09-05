import styled from "styled-components";
import imagem from '../../assets/ba.jpg';
import imagem2 from '../../assets/su.jpg';

export const CssLogin = styled.div`
section{
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background: url(${imagem});
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
.divLb1{
    display: flex;
    width: 560px;
    justify-content: flex-start;
}
label{
    color: white;
    font-size: 23px;
    padding: 10px;
}
.divdoBotao{
    margin-top: 80px;
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
input{
    width: 40vw;
    border-radius: 10px;
    color: black;
    cursor: text;
    /* box-shadow: 5px 5px rgb(000,000,000, 40%); */
}
nav{
    display: flex;
    height: 500px;
    width: inherit;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 20px;
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
    .divLb1{
    width: 310px;
    }
    label{
        font-size: 30px;
    }
    input{
    width: 80vw;
    border-radius: 10px;
    color: black;
    }
    nav{
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;      
    }
    }
`;
