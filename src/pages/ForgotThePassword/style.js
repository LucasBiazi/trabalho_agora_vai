import styled from "styled-components";
import imagem from '../../assets/ba.jpg';
import imagem2 from '../../assets/su.jpg';


export const CssFTP = styled.div`
*{
    font-size: 15px;
    color: white;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw; 
    background-image: url(${imagem});
}
div{    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(000,000,000,75%);   
    height: 500px;
    width: 500px;
    border-radius: 10px;    
}
.lb1{
    margin-bottom: 20px;
}
.lb2{
    margin-top: 20px;
    margin-left: 50px;
}
.inemail{
    border-radius: 10px;    
    width: 400px;
    color: black;
}
.btnconf{
    margin-top: 50px;
    background: black;
    width: 150px;
    height: 30px;
    border-radius: 10px;    
}
.divBotao{
    color: black;   
    margin-top: 50px;
    border-radius: 100%;
    background: black;
    height: 200px;
    width: 200px;
}
@media only screen and (max-width: 850px) {
    section{
        background-image: url(${imagem2});
        height: 100vh;
        width: 100vw;    
    }
    div{
        background: rgb(000,000,000, 15%);
        height: 100vh;
        width: 100vw;
    }
    .divBotao{
        margin-top: 150px;   
        width: 200px;
        height: 200px;
    }
    .lb1,.lb2{
        font-size: 25px;
    }
    .btnconf{
    margin-top: 50px;
    font-size: 25px;
    width: 250px;
    height: 100px;
    }
    .inemail{
    width: 275px;
    height: 40px;
}
}
`;



