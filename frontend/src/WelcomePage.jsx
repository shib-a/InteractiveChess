import {LeaderBoard} from './LeaderBoard.jsx'
import {Button} from "primereact/button";
import React, {useEffect, useState} from "react"
import {Profile} from "./Profile.jsx";
import axios from "axios";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {ChessMatch} from "./ChessMatch.jsx";
import "./WelcomePageStyles.css"
const WelcomePage = () => {
    const [authKey, setAuthKey] = useState(null);
    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [visibleLoginDialogue, setVisibleLoginDialogue] = useState(false);
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const handleLoginButtonClick = async () => {
        // setVisibleLoginDialogue(true);
        await handleLoginDialogue();
    }
    const handleLoginDialogue = () => {

    }
    return (
        <div className="welcomePageDiv">
            <header className="header">
                <div className={"profileDiv"}>
                    {!isLoggedIn ? (<div>
                        <Button type={"button"} onClick={handleLoginButtonClick} label={"Login"}/>
                        <Dialog style={{ width: '50vw' }} visible={visibleLoginDialogue} onHide={() => setVisibleLoginDialogue(false)}
                                content={
                                    <div>
                                        <InputText value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}
                                                   defaultValue={"Login..."}/>
                                        <InputText value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
                                                   defaultValue={"Password"}/>
                                        <Button type={"button"} onClick={(e) => setVisibleLoginDialogue(false)} label={"Log In"}/>
                                        <Button type={"button"} onClick={(e) => setVisibleLoginDialogue(false)} label={"Cancel"}/>
                                    </div>
                                }>
                        </Dialog>
                    </div>) : (<Profile/>)}
                </div>
            </header>
            <div className={"bodyDiv"}>
                <div className={"leaderBoardDiv"}>
                    <LeaderBoard/>
                </div>
                {/*<ChessMatch/>*/}
                <div className={"optionsDiv"}>

                </div>
            </div>

        </div>
    )
}

export {WelcomePage };