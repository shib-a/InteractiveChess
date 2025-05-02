import {Button} from "primereact/button";
import React, {useEffect, useState} from "react"
import axios from "axios";
import {InputText} from "primereact/inputtext";

const ChessMatch = () => {
    const size = 8;
    const width = 8;
    const blackFigs=[]
    const [boardData, setBoardData] = useState([
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]]
    ]);
    return(<div>
        <table>
            <tbody>
            {boardData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex} style={ ((rowIndex % 2 === 0) && (colIndex % 2 === 0))?{backgroundColor: "white"}:{backgroundColor: "black"}}>
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}
export { ChessMatch };