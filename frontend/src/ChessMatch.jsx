import {Button} from "primereact/button";
import React, {useEffect, useState} from "react"
import axios from "axios";
import {InputText} from "primereact/inputtext";
import {BoardDataObject} from "./classes/BoardDataObject.js"
import {figureImages} from "./classes/Figure.js";

const ChessMatch = () => {
    const height = 8;
    const width = 8;
    const blackFigs=[]
    const [boardData, setBoardData] = useState(
    //     [
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)],
    //     [new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false),new BoardDataObject(" ",false)]
    // ]
        BoardDataObject.populateBoards()
    );
    const images = import.meta.glob('./resources/figures/**/*.{png,jpg,jpeg}');

    const getImage = async (color, type) => {
        const path = `./resources/figures/${color}/${color}-${type}.png`;
        const module = await images[path](); // returns the imported image
        return module.default;
    };

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
        <table style={{minWidth:"1280px", tableLayout:'fixed', borderCollapse: 'collapse'}}>
            <tbody>
            {boardData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex}
                            style={{
                                backgroundColor: getBackgroundColor(rowIndex, colIndex),
                                minWidth: '128px',
                                minHeight: '128px',
                            }}
                        onClick ={() =>
                        {processCellClick(rowIndex, colIndex)}
                        }>
                            {
                                cell.figure.type==="empty"
                                    ?<img src={figureImages[cell.figure.type]} alt={"/"} style={{objectFit:'contain'}}/>
                                    :<img src={figureImages[cell.figure.color][cell.figure.type]} alt={"/"} style={{objectFit:'contain'}}/>}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}
export { ChessMatch };