import {LeaderBoard} from './LeaderBoard.jsx'
import {Button} from "primereact/button";
import {React} from "react";
import {Profile} from "./Profile.jsx";
const welcomePage = () => {
    const [authKey, setAuthKey] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const handleLogin = () => {

    }
    return (
        <div>
            <div className={"profileDiv"}>
                {isLoggedIn ? (<Button type={"button"} />) : (<Profile />)}
            </div>
            <div className={"leaderBoardDiv"}>
                <LeaderBoard />
            </div>
            <div className={"optionsDiv"}>

            </div>
        </div>
    )
}

export { welcomePage };