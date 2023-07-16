import React, {FC} from 'react';
import "./big-button.css"

interface IBigButton {
    button_color: string
    text_color: string
    text: string
}

const BigButton: FC<IBigButton> = ({button_color, text_color, text}) => {
    return (
        <button style={{backgroundColor: button_color}} className={"big-button"}>
            <div style={{color: text_color}}>
                {text}
            </div>
            <div className="big-button-svg">
                <svg width="8" height="7" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.47641 1.12891L7.87095 4.19342L4.47641 7.25794M7.39949 4.19342H0.516113" stroke="white"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </button>
    );
};

export default BigButton;