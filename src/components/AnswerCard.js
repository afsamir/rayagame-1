import React from "react";
import Img from "react-image"
import Spinner from "./Spinner";

export default class AnswerCard extends React.Component {


    render() {
        const {src} = this.props;

        return (
            <div style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                height: 'inherit',
                backgroundColor: "#666666"

            }}>
                <Img
                    src={src}
                    style={{
                        width: "100%", height: "100%"
                    }}
                    loader={
                        <Spinner/>
                    }
                />
            </div>)
    }
}