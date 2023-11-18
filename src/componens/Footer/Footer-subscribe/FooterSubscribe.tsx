import React from 'react';
import "./footer-subscribe.css"
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
const FooterSubscribe = () => {
    const {active, email} = useTypedSelector(state => state.subscribeButton)
    const {subscribeButtonChangeActive, subscribeButtonChangeChangeEmail} = useActions()
    return (
        <div className={"footer-subscribe"} >
            <div className="footer-subscribe-content">
                <h2 className={"footer-subscribe-content-h2"} style={{color: "#fff", fontSize: '45px'}} >
                    Subscribe to
                   <p  className={"footer-subscribe-content-p"} > our Newsletter</p>
                </h2>
                <div className="email-form">
                    <input value={email}
                        onChange={event => {
                            subscribeButtonChangeChangeEmail(event)
                        }}
                        type="text" placeholder={"Your Email Address"} />
                    <button disabled={active}
                           style={{
                               backgroundColor: active ? "#EFF6F1" : "#274C5B",
                               color: active ? "#274C5B" : "#fff"
                           }}
                          onClick={()=> {
                              subscribeButtonChangeActive(email)
                          }}
                    >Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default FooterSubscribe;