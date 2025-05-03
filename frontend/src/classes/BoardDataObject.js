import {Figure} from "./Figure.js";

export class BoardDataObject{
    constructor(figure, isHighlighted){
        this.figure = figure;
        this.isHighlighted = isHighlighted
    }
    setIsHighlighted(isHighlighted){
        this.isHighlighted = isHighlighted
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
                boards[i].push(new BoardDataObject(new Figure("rook", "black"), false));
            } else {
                // boards[i].push(new BoardDataObject(new Figure("rook", "/home/shibeyshi/IdeaProjects/InteractiveChess/frontend/src/resources/figures/white/white-rook.png"), false));
                boards[i].push(new BoardDataObject(new Figure("empty"), false));
            }
        }
    }
    return boards;
    }
}