import React from "react";
import Loader from "react-spinners/GridLoader";


const override = `
    margin: 0 auto;

`;

export default class Spinner extends React.Component {

    render() {
        return (
            <div style={{
                width: '100%', filter: "blur(1px)"
            }}>
                <Loader css={override} color={'#ddddbb'} style={{width: '100%'}}
                />
            </div>)
    }

}