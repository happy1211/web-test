import styled from 'styled-components';

const BackgroundItem = styled.div`
width: 250px;
height:150px;
border-radius:5px;
opacity:${props => props.light ? '0.6' : '1'};
background-image: linear-gradient(to right, #EDEDED, #F0F0F0);
z-index:-10;
transform: rotate(-15deg);
-moz-transform: rotate(-15deg);
-webkit-transform: rotate(-15deg);
position: absolute;
top:${props => `${props.top}vh`};
left:${props => props.left ? `${props.left}vw` : null};
right:${props => props.right ? `${props.right}vw` : null};
box-shadow:2px 2px 3px rgba(0,0,0,.05);
display:${props => props.sm ? 'none' : 'block'};
`

export default BackgroundItem;