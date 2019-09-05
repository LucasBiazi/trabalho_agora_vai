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
form{    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(000,000,000,75%);   
    height: 500px;
    width: 500px;
    border-radius: 10px;    
}
.divLb1{
    display: flex;
    width: inherit;
    align-items: flex-start;
    margin-left: 100px;
}
.lb1{
    margin-bottom: 5px;
}
.inemail{
    border-radius: 10px;    
    width: 400px;
    color: black;
}
.lb2{
    margin-top: 20px;
    margin-left: 50px;
}
.btnconf{
    margin-top: 50px;
    background: black;
    width: 150px;
    height: 30px;
    border-radius: 10px;    
    cursor: pointer;
}
.espaco{
    margin-top: 50px;
}
.divBotao{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 100%;
    background: black;
    height: 170px;
    width: 170px;
}
@media only screen and (max-width: 850px) {
    section{
        background-image: url(${imagem2});
        height: 100vh;
        width: 100vw;    
    }
    form{
        background: rgb(000,000,000,30%); 
        width: 320px;
        height: inherit;
    }
    .divLb1{
        margin-right: 45px;
    }
    .lb1,.lb2{
        font-size: 22px;
    }
    .lb2{
        width: inherit;
        width: 260px;
        margin: 0px;
        margin-top: 20px;
    }
    .btnconf{
    margin-top: 50px;
    font-size: 22px;
    width: 140px;
    height: 50px;
    }
    .espaco{
    margin-top: 250px;
    }
    .divBotao{        
        width: 150px;
        height: 150px;
    }
    .inemail{
    width: 270px;
    height: 50px;
}
}
`;
