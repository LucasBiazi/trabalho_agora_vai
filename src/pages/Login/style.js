import styled from "styled-components";
import imagem from '../../assets/ba.jpg';
import imagem2 from '../../assets/su.jpg';

export const CssLogin = styled.div`
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
label{
    color: white;
    font-size: 15px;
    padding: 10px;
}
.divBotao{
    margin-top: 80px;
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
    border-radius: 20px;
    color: black;
    cursor: text;
    /* box-shadow: 5px 5px rgb(000,000,000, 40%); */
}
nav{
    display: flex;
    height: 500px;
    width: 500px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
}
a{
    font-size: 10px;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

    @media only screen and (max-width: 850px) {
    nav{
        width: 100%;
    }
    section{
        background-image: url(${imagem2});
        height: 100%;
        width: 100%;
    }
    label{
        font-size: 30px;
    }
    form{
        background: rgb(000,000,000, 15%);
        display: flex;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;  
    }
    input{
    width: 60vw;
    border-radius: 20px;
    color: black;
    }
    }
`;
