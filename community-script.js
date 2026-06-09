// Sample leaderboard data
const leaderboardData = {
    all: [
        { rank: 1, name: 'ProGamer123', score: 98500, game: 'Snake' },
        { rank: 2, name: 'PixelMaster', score: 87200, game: 'Flappy Bird' },
        { rank: 3, name: 'GameKing99', score: 76300, game: '2048' },
        { rank: 4, name: 'NinjaGamer', score: 65800, game: 'Memory Match' },
        { rank: 5, name: 'ThunderStrike', score: 54600, game: 'Whack a Mole' },
        { rank: 6, name: 'ShadowPlayer', score: 45200, game: 'Tic Tac Toe' },
        { rank: 7, name: 'FrostByte', score: 38900, game: 'Snake' },
        { rank: 8, name: 'EchoKnight', score: 29450, game: 'Flappy Bird' },
        { rank: 9, name: 'VortexGamer', score: 18750, game: 'Memory Match' },
        { rank: 10, name: 'LunaStars', score: 12300, game: '2048' }
    ],
    monthly: [
        { rank: 1, name: 'ThunderStrike', score: 23600, game: 'Whack a Mole' },
        { rank: 2, name: 'PixelMaster', score: 21200, game: 'Flappy Bird' },
        { rank: 3, name: 'GameKing99', score: 18900, game: '2048' },
        { rank: 4, name: 'ProGamer123', score: 15400, game: 'Snake' },
        { rank: 5, name: 'NinjaGamer', score: 12800, game: 'Memory Match' }
    ],
    weekly: [
        { rank: 1, name: 'NinjaGamer', score: 8900, game: 'Memory Match' },
        { rank: 2, name: 'FrostByte', score: 7650, game: 'Snake' },
        { rank: 3, name: 'VortexGamer', score: 6320, game: 'Flappy Bird' },
        { rank: 4, name: 'ShadowPlayer', score: 5100, game: 'Tic Tac Toe' },
        { rank: 5, name: 'LunaStars', score: 3850, game: '2048' }
    ]
};

// Sample community posts
const samplePosts = [
    {
        id: 1,
        author: 'ProGamer123',
        avatar: 'P',
        content: 'Just scored 15000 in Tic Tac Toe! Finally beat the hard AI! 🎉',
        achievement: '🏆 Achievement Unlocked: Tic Tac Toe Champion',
        time: '2 hours ago',
        likes: 45,
        comments: 12
    },
    {
        id: 2,
        author: 'PixelMaster',
        avatar: 'PM',
        content: 'The Memory Match game is so addictive! I\'ve been playing for hours trying to beat my high score.',
        achievement: null,
        time: '4 hours ago',
        likes: 32,
        comments: 8
    },
    {
        id: 3,
        author: 'GameKing99',
        avatar: 'G',
        content: 'Anyone else finding the Snake game harder than it looks? My reflexes need some work! 😅',
        achievement: null,
        time: '6 hours ago',
        likes: 28,
        comments: 15
    },
    {
        id: 4,
        author: 'NinjaGamer',
        avatar: 'N',
        content: 'Just reached rank 4 on the global leaderboard! Thanks to everyone in this amazing community!',
        achievement: '🥉 Rank Achievement: Top 5 Global Player',
        time: '8 hours ago',
        likes: 67,
        comments: 23
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateLeaderboard('all');
    populateCommunityFeed();
    setupNavigation();
});

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('user-btn')) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Populate Leaderboard
function populateLeaderboard(period) {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = '';

    const data = leaderboardData[period];
    
    data.forEach(entry => {
        const row = document.createElement('div');
        row.className = 'leaderboard-row';
        
        let rankClass = '';
        if (entry.rank === 1) rankClass = 'top-1';
        else if (entry.rank === 2) rankClass = 'top-2';
        else if (entry.rank === 3) rankClass = 'top-3';
        
        const rankEmoji = entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : '';
        
        row.innerHTML = `
            <span class="rank ${rankClass}">${rankEmoji} ${entry.rank}</span>
            <span class="player">
                <div class="player-avatar">${entry.name.charAt(0)}</div>
                <span>${entry.name}</span>
            </span>
            <span class="score">${entry.score.toLocaleString()}</span>
            <span>${entry.game}</span>
        `;
        
        leaderboardBody.appendChild(row);
    });
}

// Filter Leaderboard
function filterLeaderboard(period) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    populateLeaderboard(period);
}

// Populate Community Feed
function populateCommunityFeed() {
    const feed = document.getElementById('postsFeed');
    feed.innerHTML = '';

    samplePosts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        
        const achievementHTML = post.achievement ? 
            `<div class="post-achievement">${post.achievement}</div>` : '';
        
        postEl.innerHTML = `
            <div class="post-header">
                <div class="post-avatar">${post.avatar}</div>
                <div class="post-author">
                    <div class="post-name">${post.author}</div>
                    <div class="post-time">${post.time}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            ${achievementHTML}
            <div class="post-stats">
                <div class="post-stat">👍 ${post.likes}</div>
                <div class="post-stat">💬 ${post.comments}</div>
                <div class="post-stat">↗️ Share</div>
            </div>
        `;
        
        feed.appendChild(postEl);
    });
}

// Scroll to Games
function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

// Start Game
function startGame(gameName) {
    const modal = document.getElementById('gameModal');
    const gameContainer = document.getElementById('gameContainer');
    
    gameContainer.innerHTML = '';
    
    switch(gameName) {
        case 'flappy':
            gameContainer.innerHTML = '<div id="flappyGame"></div>';
            initFlappyBird();
            break;
        case 'tictactoe':
            gameContainer.innerHTML = '<div id="tictactoeGame"></div>';
            initTicTacToe();
            break;
        case 'memory':
            gameContainer.innerHTML = '<div id="memoryGame"></div>';
            initMemoryGame();
            break;
        case 'snake':
            gameContainer.innerHTML = '<div id="snakeGame"></div>';
            initSnake();
            break;
        case 'whackmole':
            gameContainer.innerHTML = '<div id="moleGame"></div>';
            initWhackAMole();
            break;
        case '2048':
            gameContainer.innerHTML = '<div id="game2048"></div>';
            init2048();
            break;
    }
    
    modal.classList.add('show');
}

// Close Game
function closeGame() {
    document.getElementById('gameModal').classList.remove('show');
}

// ==================== FLAPPY BIRD ====================
function initFlappyBird() {
    let score = 0;
    let gameOver = false;
    let birdY = 150;
    let birdX = 50;
    let velocity = 0;
    const gravity = 0.6;
    const jumpPower = 12;
    let pipes = [];
    let frameCount = 0;

    const container = document.getElementById('flappyGame');
    container.style.cssText = 'width: 100%; height: 400px; background: linear-gradient(to bottom, #87CEEB, #E0F6FF); position: relative; overflow: hidden; border-radius: 8px;';
    
    const bird = document.createElement('div');
    bird.style.cssText = 'position: absolute; width: 30px; height: 30px; background: 🐦; left: 50px; top: 150px; font-size: 30px; line-height: 30px; border-radius: 50%;';
    bird.textContent = '🐦';
    container.appendChild(bird);

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'position: absolute; top: 10px; left: 10px; color: #333; font-size: 20px; font-weight: bold; z-index: 10;';
    scoreDiv.textContent = `Score: ${score}`;
    container.appendChild(scoreDiv);

    const gameOverDiv = document.createElement('div');
    gameOverDiv.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.9); color: white; padding: 20px; border-radius: 8px; text-align: center; display: none; z-index: 20;';
    container.appendChild(gameOverDiv);

    function updateGame() {
        if (gameOver) return;

        velocity += gravity;
        birdY += velocity;

        bird.style.top = birdY + 'px';

        frameCount++;
        if (frameCount % 100 === 0) {
            const pipeGap = 100;
            const pipeTop = Math.random() * (300 - pipeGap);
            const pipe = {
                x: 400,
                topHeight: pipeTop,
                scored: false
            };
            pipes.push(pipe);
        }

        pipes.forEach((pipe, index) => {
            pipe.x -= 5;

            if (pipe.x < 0) {
                pipes.splice(index, 1);
            }

            if (!pipe.scored && pipe.x < birdX) {
                pipe.scored = true;
                score++;
                scoreDiv.textContent = `Score: ${score}`;
            }

            // Collision detection
            if (birdX < pipe.x + 50 && birdX + 30 > pipe.x) {
                if (birdY < pipe.topHeight || birdY + 30 > pipe.topHeight + 100) {
                    gameOver = true;
                }
            }
        });

        if (birdY > 400 || birdY < 0) {
            gameOver = true;
        }

        if (gameOver) {
            gameOverDiv.style.display = 'block';
            gameOverDiv.innerHTML = `<h2>Game Over!</h2><p>Final Score: ${score}</p><button onclick="location.reload()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">Play Again</button>`;
        }

        requestAnimationFrame(updateGame);
    }

    document.addEventListener('click', function flap() {
        velocity = -jumpPower;
    }, { once: false });

    updateGame();
}

// ==================== TIC TAC TOE ====================
function initTicTacToe() {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const container = document.getElementById('tictactoeGame');
    container.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 20px;';

    const statusDiv = document.createElement('div');
    statusDiv.style.cssText = 'font-size: 18px; font-weight: bold; color: #667eea;';
    statusDiv.textContent = 'Your turn (X)';
    container.appendChild(statusDiv);

    const boardDiv = document.createElement('div');
    boardDiv.style.cssText = 'display: grid; grid-template-columns: repeat(3, 100px); gap: 10px;';

    board.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.style.cssText = 'width: 100px; height: 100px; background: #1e293b; border: 2px solid #667eea; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; border-radius: 8px; transition: all 0.3s;';
        cellDiv.textContent = board[index];
        
        cellDiv.addEventListener('click', () => {
            if (board[index] === '' && gameActive && currentPlayer === 'X') {
                board[index] = 'X';
                cellDiv.textContent = 'X';
                cellDiv.style.color = '#667eea';
                checkWinner();
                if (gameActive) {
                    currentPlayer = 'O';
                    statusDiv.textContent = 'AI thinking...';
                    setTimeout(aiMove, 500);
                }
            }
        });

        boardDiv.appendChild(cellDiv);
    });

    container.appendChild(boardDiv);

    const resetBtn = document.createElement('button');
    resetBtn.style.cssText = 'padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;';
    resetBtn.textContent = 'Reset Game';
    resetBtn.addEventListener('click', () => location.reload());
    container.appendChild(resetBtn);

    function aiMove() {
        const emptyIndexes = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
        if (emptyIndexes.length > 0) {
            const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
            board[randomIndex] = 'O';
            document.querySelectorAll('#tictactoeGame > div:nth-child(2) > div')[randomIndex].textContent = 'O';
            document.querySelectorAll('#tictactoeGame > div:nth-child(2) > div')[randomIndex].style.color = '#ec4899';
            checkWinner();
            if (gameActive) {
                currentPlayer = 'X';
                statusDiv.textContent = 'Your turn (X)';
            }
        }
    }

    function checkWinner() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let condition of winConditions) {
            if (board[condition[0]] && board[condition[0]] === board[condition[1]] && board[condition[0]] === board[condition[2]]) {
                gameActive = false;
                statusDiv.textContent = `${board[condition[0]]} wins!`;
                statusDiv.style.color = board[condition[0]] === 'X' ? '#4caf50' : '#f44336';
                return;
            }
        }

        if (!board.includes('')) {
            gameActive = false;
            statusDiv.textContent = "It's a draw!";
            statusDiv.style.color = '#ff9800';
        }
    }
}

// ==================== MEMORY MATCH ====================
function initMemoryGame() {
    const container = document.getElementById('memoryGame');
    container.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 20px;';

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'font-size: 18px; font-weight: bold; color: #667eea;';
    scoreDiv.textContent = 'Matches: 0/8';
    container.appendChild(scoreDiv);

    const emojis = ['🍎', '🍌', '🍒', '🍍', '🥝', '🍓', '🍊', '🥭'];
    let cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    let flipped = [];
    let matched = [];
    let matches = 0;

    const boardDiv = document.createElement('div');
    boardDiv.style.cssText = 'display: grid; grid-template-columns: repeat(4, 80px); gap: 10px;';

    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.style.cssText = 'width: 80px; height: 80px; background: linear-gradient(135deg, #667eea, #ec4899); border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 40px; transition: all 0.3s; user-select: none;';
        cardDiv.textContent = '?';
        cardDiv.dataset.index = index;

        cardDiv.addEventListener('click', () => {
            if (flipped.length < 2 && !matched.includes(index) && !flipped.includes(index)) {
                cardDiv.textContent = cards[index];
                cardDiv.style.background = '#1e293b';
                flipped.push(index);

                if (flipped.length === 2) {
                    if (cards[flipped[0]] === cards[flipped[1]]) {
                        matched.push(...flipped);
                        matches++;
                        scoreDiv.textContent = `Matches: ${matches}/8`;
                        flipped = [];
                        
                        if (matches === 8) {
                            setTimeout(() => {
                                scoreDiv.textContent = '🎉 You Won!';
                                scoreDiv.style.color = '#4caf50';
                            }, 300);
                        }
                    } else {
                        setTimeout(() => {
                            document.querySelectorAll('#memoryGame > div:nth-child(2) > div')[flipped[0]].textContent = '?';
                            document.querySelectorAll('#memoryGame > div:nth-child(2) > div')[flipped[0]].style.background = 'linear-gradient(135deg, #667eea, #ec4899)';
                            document.querySelectorAll('#memoryGame > div:nth-child(2) > div')[flipped[1]].textContent = '?';
                            document.querySelectorAll('#memoryGame > div:nth-child(2) > div')[flipped[1]].style.background = 'linear-gradient(135deg, #667eea, #ec4899)';
                            flipped = [];
                        }, 800);
                    }
                }
            }
        });

        boardDiv.appendChild(cardDiv);
    });

    container.appendChild(boardDiv);
}

// ==================== SNAKE ====================
function initSnake() {
    const container = document.getElementById('snakeGame');
    container.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 20px;';

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'font-size: 18px; font-weight: bold; color: #667eea;';
    scoreDiv.textContent = 'Score: 0';
    container.appendChild(scoreDiv);

    const gameCanvas = document.createElement('canvas');
    gameCanvas.width = 400;
    gameCanvas.height = 400;
    gameCanvas.style.cssText = 'background: #1e293b; border: 2px solid #667eea; border-radius: 8px;';
    container.appendChild(gameCanvas);

    const ctx = gameCanvas.getContext('2d');
    const gridSize = 20;
    const tileCount = gameCanvas.width / gridSize;

    let snake = [{x: 10, y: 10}];
    let food = {x: 15, y: 15};
    let direction = {x: 1, y: 0};
    let nextDirection = {x: 1, y: 0};
    let score = 0;
    let gameOver = false;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && direction.y === 0) nextDirection = {x: 0, y: -1};
        if (e.key === 'ArrowDown' && direction.y === 0) nextDirection = {x: 0, y: 1};
        if (e.key === 'ArrowLeft' && direction.x === 0) nextDirection = {x: -1, y: 0};
        if (e.key === 'ArrowRight' && direction.x === 0) nextDirection = {x: 1, y: 0};
    });

    function update() {
        if (gameOver) return;

        direction = nextDirection;
        const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            gameOver = true;
            scoreDiv.textContent = `Game Over! Final Score: ${score}`;
            return;
        }

        for (let segment of snake) {
            if (head.x === segment.x && head.y === segment.y) {
                gameOver = true;
                scoreDiv.textContent = `Game Over! Final Score: ${score}`;
                return;
            }
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score += 10;
            scoreDiv.textContent = `Score: ${score}`;
            food = {x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount)};
        } else {
            snake.pop();
        }

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

        ctx.fillStyle = '#667eea';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * gridSize + 1, segment.y * gridSize + 1, gridSize - 2, gridSize - 2);
        });

        ctx.fillStyle = '#ec4899';
        ctx.fillRect(food.x * gridSize + 1, food.y * gridSize + 1, gridSize - 2, gridSize - 2);

        setTimeout(update, 100);
    }

    update();
}

// ==================== WHACK A MOLE ====================
function initWhackAMole() {
    const container = document.getElementById('moleGame');
    container.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 20px;';

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'font-size: 18px; font-weight: bold; color: #667eea;';
    scoreDiv.textContent = 'Score: 0 | Time: 30s';
    container.appendChild(scoreDiv);

    const boardDiv = document.createElement('div');
    boardDiv.style.cssText = 'display: grid; grid-template-columns: repeat(3, 100px); gap: 10px;';

    let score = 0;
    let timeLeft = 30;
    let gameActive = true;

    const holes = [];
    for (let i = 0; i < 9; i++) {
        const hole = document.createElement('div');
        hole.style.cssText = 'width: 100px; height: 100px; background: #1e293b; border: 3px solid #667eea; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 50px; cursor: pointer; position: relative; overflow: hidden;';
        hole.textContent = '';
        boardDiv.appendChild(hole);
        holes.push(hole);
    }

    container.appendChild(boardDiv);

    function randomHole() {
        return holes[Math.floor(Math.random() * holes.length)];
    }

    function showMole() {
        if (!gameActive) return;
        
        const hole = randomHole();
        hole.textContent = '🦡';
        hole.style.animation = 'none';
        
        const hitTime = 800;
        setTimeout(() => {
            hole.textContent = '';
        }, hitTime);

        hole.onclick = (e) => {
            e.stopPropagation();
            if (hole.textContent === '🦡') {
                hole.textContent = '';
                score++;
                scoreDiv.textContent = `Score: ${score} | Time: ${timeLeft}s`;
            }
        };

        setTimeout(showMole, 1000);
    }

    const timer = setInterval(() => {
        timeLeft--;
        scoreDiv.textContent = `Score: ${score} | Time: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            gameActive = false;
            clearInterval(timer);
            scoreDiv.textContent = `Game Over! Final Score: ${score}`;
            holes.forEach(hole => hole.onclick = null);
        }
    }, 1000);

    showMole();
}

// ==================== 2048 ====================
function init2048() {
    const container = document.getElementById('game2048');
    container.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 20px;';

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'font-size: 18px; font-weight: bold; color: #667eea;';
    scoreDiv.textContent = 'Score: 0';
    container.appendChild(scoreDiv);

    let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    let score = 0;

    function addNewTile() {
        let empty = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (grid[i][j] === 0) empty.push({i, j});
            }
        }
        if (empty.length > 0) {
            const pos = empty[Math.floor(Math.random() * empty.length)];
            grid[pos.i][pos.j] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function render() {
        const boardDiv = document.querySelector('#game2048 > div:nth-child(2)');
        if (boardDiv) boardDiv.remove();

        const newBoard = document.createElement('div');
        newBoard.style.cssText = 'display: grid; grid-template-columns: repeat(4, 80px); gap: 10px; background: #0f172a; padding: 10px; border-radius: 8px;';

        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                const cellDiv = document.createElement('div');
                cellDiv.style.cssText = `width: 80px; height: 80px; background: ${cell === 0 ? '#1e293b' : '#667eea'}; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: white;`;
                cellDiv.textContent = cell === 0 ? '' : cell;
                newBoard.appendChild(cellDiv);
            });
        });

        container.appendChild(newBoard);
    }

    function move(direction) {
        let moved = false;

        if (direction === 'left' || direction === 'right') {
            for (let i = 0; i < 4; i++) {
                if (direction === 'right') grid[i].reverse();
                
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < 4; k++) {
                        if (grid[i][k] === 0) {
                            grid[i].splice(k, 1);
                            grid[i].push(0);
                            k--;
                        }
                    }
                }

                for (let j = 0; j < 3; j++) {
                    if (grid[i][j] !== 0 && grid[i][j] === grid[i][j + 1]) {
                        grid[i][j] *= 2;
                        score += grid[i][j];
                        grid[i].splice(j + 1, 1);
                        grid[i].push(0);
                        moved = true;
                    }
                }

                for (let k = 0; k < 4; k++) {
                    if (grid[i][k] === 0) {
                        grid[i].splice(k, 1);
                        grid[i].push(0);
                        k--;
                    }
                }

                if (direction === 'right') grid[i].reverse();
            }
        }

        if (moved) {
            addNewTile();
            scoreDiv.textContent = `Score: ${score}`;
            render();
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); move('left'); }
        if (e.key === 'ArrowRight') { e.preventDefault(); move('right'); }
    });

    addNewTile();
    addNewTile();
    render();
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('gameModal');
    if (e.target === modal) {
        closeGame();
    }
});