import whiteRook from '../resources/figures/white/white-rook.png'
import whiteBishop from '../resources/figures/white/white-bishop.png'
import whiteKing from '../resources/figures/white/white-king.png'
import whitePawn from '../resources/figures/white/white-pawn.png'
import whiteKnight from '../resources/figures/white/white-knight.png'
import whiteQueen from '../resources/figures/white/white-queen.png'
import blackQueen from '../resources/figures/black/black-queen.png'
import blackBishop from '../resources/figures/black/black-bishop.png'
import blackKing from '../resources/figures/black/black-king.png'
import blackPawn from '../resources/figures/black/black-pawn.png'
import blackKnight from '../resources/figures/black/black-knight.png'
import blackRook from '../resources/figures/black/black-rook.png'
import empty from '../resources/figures/empty.png'
export class Figure {
    constructor(type, color){
        this.type = type;
        this.color = color;
    }
}
export const figureImages=  {
    white: {
        rook: whiteRook,
        bishop: whiteBishop,
        king: whiteKing,
        pawn: whitePawn,
        knight: whiteKnight,
        queen: whiteQueen
    },
    black: {
        rook: blackRook,
        bishop: blackBishop,
        king: blackKing,
        pawn: blackPawn,
        knight: blackKnight,
        queen: blackQueen
    },
    empty: empty
}