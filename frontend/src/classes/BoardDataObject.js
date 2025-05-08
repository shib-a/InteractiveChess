import {Figure} from "./Figure.js";

export class BoardDataObject{
    constructor(figure, isHighlighted, x, y){
        this.figure = figure;
        this.isHighlighted = isHighlighted
        this.x = x;
        this.y = y;
    }
    setIsHighlighted(isHighlighted){
        this.isHighlighted = isHighlighted
    }
    setFigureType(type){
        this.figure.type = type
    }
    setCoordinates(x, y){
        this.x = x;
        this.y = y;
    }
    static populateBoards(currColor){
    const boards = [
        [],[],[],[],[],[],[],[]
    ];
    let oppColor;
    switch (currColor) {
        case "white":
            oppColor = "black";
            break;
            case "black":
                oppColor = "white";
                break;
        }
    const height=8;
    const width=8;
    for (let i=0; i<height; i++) {
        for (let j=0; j<width; j++) {
            if (i < 2){
                boards[i].push(new BoardDataObject(new Figure("rook", oppColor), false, j, i));
            } else if (i > 5) {
                boards[i].push(new BoardDataObject(new Figure("rook", currColor), false, j, i));
            } else {
                // boards[i].push(new BoardDataObject(new Figure("rook", "/home/shibeyshi/IdeaProjects/InteractiveChess/frontend/src/resources/figures/white/white-rook.png"), false));
                boards[i].push(new BoardDataObject(new Figure("empty"), false, j, i));
            }
        }
    }
    return boards;
    }
}