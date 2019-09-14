import React from "react";
import Loader from "react-spinners/GridLoader";


const override = `
    margin: 0 auto;
    background-color: #666666;
`;

export default class Spinner extends React.Component {

    render() {
        return (

            <Loader css={override} color={'#bbbbbb'} style={{width: '100%'}}
            />)
    }

}