import React, { Component } from 'react';
import Item from './Item'
import items from './utilis/items'
import styled from 'styled-components'

const GridContainer = styled.div``;
const GridHeader = styled.h3`
      text-align:center;
      font-size:16px;
      font-weight:300;
      margin-top:2%;
      margin-bottom:0;
      `;
const Hr = styled.hr`
      background: linear-gradient(to right, #E20F83,#1CA8F3);
      height: 2px;
      border:none;
      width:25px;
      margin-top:6px;
      margin-bottom:5%;`;

const GridItemsContainer = styled.div`
    
    max-width:1200px;
    display:flex;
    flex-wrap:wrap;
    margin:auto;
    margin-bottom:5%;

    .border{
        background-image:linear-gradient(#E20F83,#1CA8F3);
        margin:2%;
        width:21%;
        visibility:hidden;
        border-radius:5px;

        &:hover{
           visibility:visible;
        }
        
        .item{
            border-radius:5px;
            visibility:visible;
            background-color:#fafafa;
            padding:15% 0;
            margin:2%;
            width:96%;
            height:97%;
            display:flex;
            flex-direction:column;
            align-items:center;
        justify-content:center;

        

            img{
            max-width: 200px;
            height:auto;
        }
        }
    }

       
        

      `;

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({ items })
    }



    render() {
        return (<GridContainer>

            <GridHeader>Nowości</GridHeader>
            <Hr />

            <GridItemsContainer>


                {this.state.items.map(item => <Item key={item.id} img={item.img} text={item.text} />)}


            </GridItemsContainer>

        </GridContainer>);

    }

}

export default Grid;