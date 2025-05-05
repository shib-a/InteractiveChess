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
    static populateBoards(){
    const boards = [
        [],[],[],[],[],[],[],[]
    ];
    const height=8;
    const width=8;
    for (let i=0; i<height; i++) {
        for (let j=0; j<width; j++) {
            if (i < 2 || i > 5){
                boards[i].push(new BoardDataObject(new Figure("rook", "black"), false, j, i));
            } else {
                // boards[i].push(new BoardDataObject(new Figure("rook", "/home/shibeyshi/IdeaProjects/InteractiveChess/frontend/src/resources/figures/white/white-rook.png"), false));
                boards[i].push(new BoardDataObject(new Figure("empty"), false, j, i));
            }
        }
    }
    return boards;
    }
}