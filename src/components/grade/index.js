import React from "react";
import { isInRange } from "../../utils/grades-utils";
import { WRONG_VALUE_MESSAGE, WRONG_WEIGHT_MESSAGE } from "./constants";
import "./style.css";

const Grade = ({ onChange, value = 0, weight = 0, id }) => {
    const validValue = (parseFloat(value, 10) || parseFloat(value, 10) === 0) && isInRange(0, 5, value);
    const validWeight = (parseInt(weight, 10) || parseInt(weight, 10) === 0) && isInRange(0, 100, weight);
    
    return ( 
        <div className="grade-container">
            <div>
                {!validValue && <span className="wrong-grade-value">{WRONG_VALUE_MESSAGE}</span>}
            </div>
            <div className="grade">
                <input
                    className={`grade-value ${validValue ? "" : "error"}`}
                    value={value}
                    onChange={(e) => onChange(e, "value", id)}
                />
                <hr className="grade-divider"/>
                <input
                    className={`grade-weight ${validWeight ? "" : "error"}`}
                    value={weight}
                    onChange={(e) => onChange(e, "weight", id)}
                />
            </div>
            <div>
                {!validWeight && <span className="wrong-grade-weight">{WRONG_WEIGHT_MESSAGE}</span>}
            </div>
        </div>
     );
}

export default Grade;