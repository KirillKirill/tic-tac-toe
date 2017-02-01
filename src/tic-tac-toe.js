class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.mas = [[],[],[]];
        this.count = 0;
        this.winner = false;
        this.nextPlayer = false;
        this.winSymbol = null;
    }

    getCurrentPlayerSymbol() {
        if (!this.nextPlayer) return this.symbol;
        else {
            this.symbol = this.symbol === 'x' ? 'o': 'x'
            this.nextPlayer = false;
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.mas[rowIndex][columnIndex]) {
            this.mas[rowIndex][columnIndex] = this.symbol;
            this.count++;
            this.nextPlayer = true;
            if ((this.mas[0][0] && this.mas[0][0] == this.mas[0][1] && this.mas[0][0] == this.mas[0][2])
                || (this.mas[1][0] && this.mas[1][0] == this.mas[1][1] && this.mas[1][0] == this.mas[1][2])
                || (this.mas[2][0] && this.mas[2][0] == this.mas[2][1] && this.mas[2][0] == this.mas[2][2])
                || (this.mas[0][0] && this.mas[0][0] == this.mas[1][1] && this.mas[0][0] == this.mas[2][2])
                || (this.mas[0][2] && this.mas[0][2] == this.mas[1][1] && this.mas[0][2] == this.mas[2][0])
                || (this.mas[0][0] && this.mas[0][0] == this.mas[1][0] && this.mas[0][0] == this.mas[2][0])
                || (this.mas[0][1] && this.mas[0][1] == this.mas[1][1] && this.mas[0][1] == this.mas[2][1])
                || (this.mas[0][2] && this.mas[0][2] == this.mas[1][2] && this.mas[0][2] == this.mas[2][2])) {
                    this.winner = true;
                    this.winSymbol = this.symbol;
            }
            this.getCurrentPlayerSymbol()
        }
    }

    isFinished() {
        return this.count == 9 || this.winner ? true : false;
    }

    getWinner() {
        return this.winSymbol;
    }

    noMoreTurns() {
        return this.count == 9;
    }

    isDraw() {
        return !!(this.count == 9 && this.winner == false);
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.mas[rowIndex][colIndex]) return this.mas[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;