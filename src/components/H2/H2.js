import styled from "styled-components";


const H2 = styled.h2`
    font-size:32px;
    font-weight:400;
    color:#1CA8F3;
    text-align:${props => props.mobile ? 'center' : "left"};
    margin: ${props => props.mobile ? '10% 0 15%' : null};
    .big{font-weight:600}
`;

export default H2;