   
    if (window.matchMedia("(min-width:700px)").matches){
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        
        const resolution = 5;
        
        canvas.width = 400;
        canvas.height = 400;


        const Cols = canvas.width / resolution
        const Rows = canvas.height / resolution
    
            // function that creates the grid
        function buildGrid() {
            return new Array(Cols).fill(null)
                .map(() => new Array(Rows).fill(null) 
                .map(() => Math.floor(Math.random() * 2)));      
        }
    
        let grid = buildGrid();
    
        requestAnimationFrame(update)
    
        function update() {
            grid = nextGen(grid);
        
            render(grid)
        
            requestAnimationFrame(update)
        }
    
        function nextGen(grid) {
        const nextGen = grid.map(arr => [...arr])
    
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid[col].length; row++) {
                const cell = grid[col][row];
    
                let numNeighbours = 0; 
    
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if( i === 0 && j === 0 ){
                            continue;
                        }
    
                        const x_cell = col + i;
                        const y_cell = row + j;
    
                        if (x_cell >= 0 && y_cell >= 0 && x_cell < Cols && y_cell < Rows) {
                            const currentNeightbor = grid[col + i] [row + j];
                            numNeighbours += currentNeightbor;
                            
                        } 
                    }  
                }
    
                if (cell === 1 && numNeighbours < 2 ) {
                        nextGen[col][row] = 0;
    
                } else if (cell === 1 && numNeighbours > 3 ){
                        nextGen[col][row] = 0; 
    
                } else if (cell === 0 && numNeighbours === 3) {
                        nextGen[col][row] = 1; 
                }
            }
    
        }
        return nextGen;
    }
    
    function render(grid) {
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid[col].length; row++) {
                const cell = grid[col][row];
                
            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution )
            ctx.fillStyle = cell ? 'black' : 'white'
            ctx.fill()
            }    
        }  
    }

    
    }  else {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        
        const resolution = 5;
        
        canvas.width = 300;
        canvas.height = 300;

        const Cols = canvas.width / resolution
        const Rows = canvas.height / resolution
    
            // function that creates the grid
        function buildGrid() {
            return new Array(Cols).fill(null)
                .map(() => new Array(Rows).fill(null) 
                .map(() => Math.floor(Math.random() * 2)));      
        }
    
        let grid = buildGrid();
    
        requestAnimationFrame(update)
    
        function update() {
            grid = nextGen(grid);
        
            render(grid)
        
            requestAnimationFrame(update)
        }
    
        function nextGen(grid) {
        const nextGen = grid.map(arr => [...arr])
    
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid[col].length; row++) {
                const cell = grid[col][row];
    
                let numNeighbours = 0; 
    
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if( i === 0 && j === 0 ){
                            continue;
                        }
    
                        const x_cell = col + i;
                        const y_cell = row + j;
    
                        if (x_cell >= 0 && y_cell >= 0 && x_cell < Cols && y_cell < Rows) {
                            const currentNeightbor = grid[col + i] [row + j];
                            numNeighbours += currentNeightbor;
                            
                        } 
                    }  
                }
    
                if (cell === 1 && numNeighbours < 2 ) {
                        nextGen[col][row] = 0;
    
                } else if (cell === 1 && numNeighbours > 3 ){
                        nextGen[col][row] = 0; 
    
                } else if (cell === 0 && numNeighbours === 3) {
                        nextGen[col][row] = 1; 
                }
            }
    
        }
        return nextGen;
    }
    
    function render(grid) {
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid[col].length; row++) {
                const cell = grid[col][row];
                
            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution )
            ctx.fillStyle = cell ? 'black' : 'white'
            ctx.fill()
            }    
        }  
    }

}





