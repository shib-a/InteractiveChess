import {Button} from "primereact/button";
import React, {useEffect, useState} from "react"
import axios from "axios";
import {InputText} from "primereact/inputtext";
import {BoardDataObject} from "./classes/BoardDataObject.js"
import {Figure, figureImages} from "./classes/Figure.js";

const ChessMatch = () => {
    const height = 8;
    const width = 8;
    const currColor = "black";
    const [chosenCell, setChosenCell] = useState(null);
    const [choice, setChoice] = useState(null);
    const [boardData, setBoardData] = useState(
        BoardDataObject.populateBoards()
    );

    const processCellClick = (rowIndex, colIndex) =>{
        if(boardData[rowIndex][colIndex].figure.color !== currColor && chosenCell === null
            || chosenCell === null && boardData[rowIndex][colIndex].figure.type === "empty"){
            console.log(boardData);
            return;
        }
        const newBoardData = boardData.map((row, rIdx) =>
            row.map((cell, cIdx) => {
                // if (rIdx === rowIndex && cIdx === colIndex) {
                //     const newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell);
                    // if(newCell.isHighlighted){
                    //     newCell.setIsHighlighted(false);
                    //     setChoice(null);
                    // } else {
                    //     if(chosenCell !== null){
                    //         if(rIdx === rowIndex && cIdx === colIndex){
                    //             // const replacingCell = Object.assign(Object.create(Object.getPrototypeOf(chosenFigure)), boardData[rowIndex][colIndex]);
                    //             newCell.figure = chosenCell.figure;
                    //             setChoice(null);
                    //             return newCell;
                    //         }
                    //         if(cell.y === chosenCell.y && cell.x === chosenCell.x){
                    //             newCell.figure.type = "empty";
                    //             newCell.isHighlighted = false;
                    //             console.log(cell);
                    //             setChoice(null);
                    //             return newCell;
                    //         } else {
                    //             setChoice(newCell);
                    //             newCell.setIsHighlighted(true);
                    //             return newCell;
                    //         }
                    //     }
                    //     newCell.setIsHighlighted(true);
                    //     setChoice(newCell);
                    // }
                    // return newCell;
                // }
                const newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell);
                // newCell.setIsHighlighted(false);
                // setChosenCell(choice);
                return newCell;
            })
        );
        console.log(chosenCell);
        for(let i = 0; i < height; i++){
            for(let j = 0; j < width; j++){
                if (chosenCell === null) {
                    if (i === rowIndex && j === colIndex) {
                        if (newBoardData[i][j].isHighlighted) {
                            newBoardData[i][j].setIsHighlighted(false);
                            setChosenCell(null);
                            break;
                        }
                        newBoardData[i][j].setIsHighlighted(true);
                        setChosenCell(newBoardData[i][j]);
                        break;
                    }
                    newBoardData[i][j].setIsHighlighted(false);
                } else {
                    if (i === rowIndex && j === colIndex){
                        // console.log("here again");
                        console.log(i,j, chosenCell.x, chosenCell.y);
                        if (i !== chosenCell.y || j !== chosenCell.x) {
                            newBoardData[i][j] = Object.assign(Object.create(Object.getPrototypeOf(chosenCell)), chosenCell);
                            newBoardData[i][j].setIsHighlighted(false);
                            newBoardData[i][j].setCoordinates(j, i);
                            console.log(i,j);
                            newBoardData[chosenCell.y][chosenCell.x] = new BoardDataObject(new Figure("empty"),
                                false, chosenCell.x, chosenCell.y);
                            console.log(newBoardData[chosenCell.x][chosenCell.y]);
                            console.log(chosenCell);
                            setChoice(chosenCell);
                            setChosenCell(null);
                            // break;
                        } else {
                            newBoardData[i][j].setIsHighlighted(false);
                            setChoice(chosenCell);
                            setChosenCell(null);
                            // break;
                        }
                    }
                }
            }
        }
        setBoardData(newBoardData);
        // console.log(rowIndex, colIndex);
        console.log(choice);
        // console.log(chosenCell);
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