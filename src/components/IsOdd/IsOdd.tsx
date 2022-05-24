import React from "react";

const IsOdd = ({ number }: { number: number }) => {
    return (
        <div>
            {number} {number % 2 === 1 ? "IS ODD !!!" : "Is Not Odd :("}
        </div>
    );
};

export default IsOdd;
