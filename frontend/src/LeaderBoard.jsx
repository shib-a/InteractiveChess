import {useState} from "react";
import axios from "axios";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";

const LeaderBoard = (currentPlayer) => {
    const [players, setPlayers] = useState([]);
    const fetchPlayers = () => {
        axios.get('http://localhost:5000/api/leaderboard').then((response) => {
            setPlayers(response.data.players);
        })
    }
    return (
     <div>
         <DataTable value={players}>
             <Column field="username" label="Username" />
             <Column field="rating" label="Rating" sortable={true} />
         </DataTable>
         <span>leaderboard will be here</span>
     </div>
    )
}
export { LeaderBoard }