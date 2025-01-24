class Sudoku {
    constructor() {
        this.gameField = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    check(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (this.gameField[row][i] === num) return false;
        }
        for (let i = 0; i < 9; i++) {
            if (this.gameField[i][col] === num) return false;
        }
        for (let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
            for (let j = Math.floor(col / 3) * 3; j < Math.floor(col / 3) * 3 + 3; j++) {
                if (this.gameField[i][j] === num) return false;
            }
        }
        return true;
    }

    generate() {
        this.gameField = Array.from({ length: 9 }, () => Array(9).fill(0));
        this.generateGrid();
        //this.gameField[0][1] = this.gameField[0][0];
    }

    generateGrid(row = 0, col = 0) {
        if (row === 9) return true;
        if (col === 9) return this.generateGrid(row + 1, 0);

        const numbers = this.shuffle(Array.from({ length: 9 }, (_, i) => i + 1));

        for (let num of numbers) {
            if (this.check(row, col, num)) {
                this.gameField[row][col] = num;
                if (this.generateGrid(row, col + 1)) return true;
                this.gameField[row][col] = 0;
            }
        }
        return false;
    }

    globalCheck() {
        let visited = new Set();
        const errors = [];
        let isComplete = true;

        for (let i = 0; i < 9; i++) {
            visited.clear();
            for (let j = 0; j < 9; j++) {
                if (this.gameField[i][j] === 0) {
                    isComplete = false;
                }
                if (visited.has(this.gameField[i][j]) && this.gameField[i][j] !== 0) {
                    errors.push({ row: i, col: j });
                }
                if (this.gameField[i][j] !== 0) visited.add(this.gameField[i][j]);
            }
        }

        for (let j = 0; j < 9; j++) {
            visited.clear();
            for (let i = 0; i < 9; i++) {
                if (visited.has(this.gameField[i][j]) && this.gameField[i][j] !== 0) {
                    errors.push({ row: i, col: j });
                }
                if (this.gameField[i][j] !== 0) visited.add(this.gameField[i][j]);
            }
        }

        for (let squareRow = 0; squareRow < 3; squareRow++) {
            for (let squareCol = 0; squareCol < 3; squareCol++) {
                visited.clear();
                for (let i = squareRow * 3; i < squareRow * 3 + 3; i++) {
                    for (let j = squareCol * 3; j < squareCol * 3 + 3; j++) {
                        if (visited.has(this.gameField[i][j]) && this.gameField[i][j] !== 0) {
                            errors.push({ row: i, col: j });
                        }
                        if (this.gameField[i][j] !== 0) visited.add(this.gameField[i][j]);
                    }
                }
            }
        }

        return { errors, isComplete };
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render(errors = [], highlight = false) {
        const grid = document.getElementById("sudoku");
        grid.innerHTML = '';
        this.gameField.forEach((row, rowIndex) => {
            row.forEach((num, colIndex) => {
                const cell = document.createElement("div");
                cell.className = "cell";
                if (errors.some(error => error.row === rowIndex && error.col === colIndex)) {
                    cell.classList.add("error");
                }
                cell.textContent = num === 0 ? '' : num;
                grid.appendChild(cell);
            });
        });
        if (highlight) {
            grid.classList.add("correct");
        } else {
            grid.classList.remove("correct");
        }
    }
}

const sudoku = new Sudoku();
sudoku.generate();
sudoku.render();

document.getElementById("generatenew").onclick = () => {
    sudoku.generate();
    sudoku.render();
};

document.getElementById("checkerrors").onclick = () => {
    const { errors, isComplete } = sudoku.globalCheck();
    if (errors.length === 0 && isComplete) {
        alert("Ошибок нет.");
        sudoku.render([], true);
    } else {
        alert(`Есть ошибки в поле. Найдено ${errors.length}.`);
        sudoku.render(errors);
    }
};

document.getElementById("generatecomplete").onclick = () => {
    sudoku.generate();
    sudoku.render();
};