class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.win = false;
        this.countStep = 0;
        this.plase = [  [null,null,null],
                        [null,null,null],
                        [null,null,null]
                        ]
    }

    getCurrentPlayerSymbol() {
        // console.log('cur -- ',this.currentPlayerSymbol);
        
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.plase[rowIndex][columnIndex] === null){
            
            
            this.plase[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.countStep = this.countStep + 1;
        } else {
            return
        }

        // var win = this.getWinner();
        // if (win === null){
            
        // }

        if (this.currentPlayerSymbol === 'x'){
            this.currentPlayerSymbol = 'o'
        } else {
            this.currentPlayerSymbol = 'x'
        }

        
        // console.log('turn - ', this.plase);
        
    }

    isFinished() {
        if (this.countStep === 9) {
            return true;
        }
        var win = this.getWinner();
        // console.log('fin win-- ', win, this.plase );
        if ( win === null){
            return false
        }
        // console.log('fin place ', this.plase )
        return true;
    }

    getWinner() {
        if (this.plase[0][0] == this.plase[0][1] && this.plase[0][0] == this.plase[0][2] && this.plase[0][0] != null){
            this.win = true;
            // console.log('w1', this.plase);
            // return this.currentPlayerSymbol;
            return this.plase[0][0];
        }
        if (this.plase[1][0] == this.plase[1][1] && this.plase[1][0] == this.plase[1][2] && this.plase[1][0] != null){
            this.win = true;
            // console.log('w2');
            //  return this.currentPlayerSymbol;
            return this.plase[1][0]
        }
        if (this.plase[2][0] == this.plase[2][1] && this.plase[2][0] == this.plase[2][2] && this.plase[2][0] != null){
            this.win = true;
            // console.log('w3');
            // return this.currentPlayerSymbol;
            return this.plase[2][0]
        }

        if (this.plase[0][0] == this.plase[1][0] && this.plase[0][0] == this.plase[2][0] && this.plase[0][0] != null){
            this.win = true;
            // console.log('w4');
            // return this.currentPlayerSymbol;
            return this.plase[0][0]
        }
        if (this.plase[0][1] == this.plase[1][1] && this.plase[0][1] == this.plase[2][1] && this.plase[0][1] != null){
            this.win = true;
            // console.log('w5');
            // return this.currentPlayerSymbol;
            return this.plase[0][1]
        }
        if (this.plase[0][2] == this.plase[1][2] && this.plase[0][2] == this.plase[2][2] && this.plase[0][2] != null){
            this.win = true;
            // console.log('w6');
            // return this.currentPlayerSymbol;
            return this.plase[0][2]
        }

        if (this.plase[0][0] == this.plase[1][1] && this.plase[0][0] == this.plase[2][2] && this.plase[0][0] !=null){
            this.win = true;
            // console.log('w7');
            // return this.currentPlayerSymbol;
            return this.plase[0][0]
        }

        if (this.plase[0][2] == this.plase[1][1] && this.plase[0][2] == this.plase[2][0] && this.plase[0][2] != null){
            this.win = true;
            // console.log('w8');
            // return this.currentPlayerSymbol;
            return this.plase[0][2]
        }

        return null;
    }

    noMoreTurns() {
        if (this.countStep == 9){
            return true;
        }

        return false;
    }

    isDraw() {
        
        if (this.countStep == 9){
            // console.log('count step - 9 ',this.countStep );
            var win = this.getWinner();
            // console.log('win -- ', win)
            if (win =='o' || win == 'x') {
                return false;
            }

            return true;
        }

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.plase[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
