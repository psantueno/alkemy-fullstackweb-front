import React from "react";
import ListErrorsBack from "./ListErrorsBack";

const MessageBack = ({ errors }) => {
    let styles = {
        padding: "1rem",
        marginTop: "1rem",
        fontWeight: "bold",
        color: "#c3939b",
        fontSize: "1rem"
    };

    return (
        <div style={styles}>Revise los siguientes datos:
            {
                errors.map((error, i) => {
                    return <ListErrorsBack {...error} key={i} />
                })
            }
        </div>
    );
};

export default MessageBack;