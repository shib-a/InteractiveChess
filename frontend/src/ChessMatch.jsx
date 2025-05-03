import {Button} from "primereact/button";
import React, {useEffect, useState} from "react"
import axios from "axios";
import {InputText} from "primereact/inputtext";
import {BoardDataObject} from "./classes/BoardDataObject.js"

const ChessMatch = () => {
    const size = 8;
    const width = 8;
    const blackFigs=[]
    const [boardData, setBoardData] = useState([
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
        [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)]
    ]);
    const processCellClick = (rowIndex, colIndex) =>{
        const newBoardData = boardData.map((row, rIdx) =>
            row.map((cell, cIdx) => {
                if (rIdx === rowIndex && cIdx === colIndex) {
                    const newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell);
                    if(newCell.isHighlighted){
                        newCell.setIsHighlighted(false);
                    } else {
                        newCell.setIsHighlighted(true);
                    }
                    return newCell;
                }
                const newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell);
                newCell.setIsHighlighted(false);
                return newCell;
            })
        );
        setBoardData(newBoardData);
        console.log(rowIndex, colIndex);
    }
    const getBackgroundColor = (rowIndex ,colIndex) => {
        let result = "";
        if (getIsHighlighted(rowIndex, colIndex)) {
            result = "yellow";
            return result;
        }
        if (((rowIndex % 2 === 0) && (colIndex % 2 === 0)) ||
        ((colIndex % 2 !== 0) && (rowIndex % 2 !== 0))){
            result = "white"
        } else {
            result = "black"
        }
        return result;

    }

    const getIsHighlighted = (rowIndex ,colIndex) =>{
        return boardData[rowIndex][colIndex].isHighlighted;
    }

    return(<div style={{width:'80%', height:'80%'}}>
        <table style={{width:"100%", tableLayout:'fixed', borderCollapse: 'collapse'}}>
            <tbody>
            {boardData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex}
                            style={{
                                backgroundColor: getBackgroundColor(rowIndex, colIndex),
                                width: '50px',
                                height: '50px',
                            }}

                        onClick ={() =>
                        {processCellClick(rowIndex, colIndex)}
                        }>
                            {cell.text}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}
export { ChessMatch };