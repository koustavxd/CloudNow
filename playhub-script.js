// Game Database
const gamesDatabase = [
    {
        id: 1,
        name: 'Flappy Bird',
        emoji: '🐦',
        category: 'action',
        description: 'Navigate through pipes with precision. Tap to fly!',
        players: '45K',
        rating: '4.8/5',
        points: 10
    },
    {
        id: 2,
        name: 'Tic Tac Toe',
        emoji: '⭕',
        category: 'strategy',
        description: 'Classic strategy game. Challenge the AI!',
        players: '38K',
        rating: '4.6/5',
        points: 5
    },
    {
        id: 3,
        name: 'Memory Match',
        emoji: '🧠',
        category: 'puzzle',
        description: 'Test your memory! Match all pairs perfectly.',
        players: '52K',
        rating: '4.9/5',
        points: 8
    },
    {
        id: 4,
        name: 'Snake',
        emoji: '🐍',
        category: 'action',
        description: 'Guide the snake and eat the food!',
        players: '61K',
        rating: '4.7/5',
        points: 12
    },
    {
        id: 5,
        name: 'Whack a Mole',
        emoji: '🔨',
        category: 'action',
        description: 'Fast reflexes needed! Tap the moles!',
        players: '35K',
        rating: '4.8/5',
        points: 15
    },
    {
        id: 6,
        name: '2048',
        emoji: '🔢',
        category: 'puzzle',
        description: 'Slide and merge! Reach the 2048 tile!',
        players: '42K',
        rating: '4.5/5',
        points: 7
    },
    {
        id: 7,
        name: 'Wordle',
        emoji: '📝',
        category: 'puzzle',
        description: 'Guess the word in 6 tries!',
        players: '58K',
        rating: '4.7/5',
        points: 20
    },
    {
        id: 8,
        name: 'Breakout',
        emoji: '🎯',
        category: 'action',
        description: 'Break all the bricks with the ball!',
        players: '28K',
        rating: '4.6/5',
        points: 14
    },
    {
        id: 9,
        name: 'Tetris',
        emoji: '⬜',
        category: 'puzzle',
        description: 'Stack the falling blocks strategically!',
        players: '47K',
        rating: '4.8/5',
        points: 11
    }
];

// Level System Constants
const LEVEL_SYSTEM = {
    BASE_POINTS: 100,           // 100 points = 1 level
    MAX_LEVEL: 3000,            // Maximum level
    POINTS_FOR_MAX_LEVEL: 500000, // Points needed to reach level 3000
    
    calculateLevel: function(totalPoints) {
        if (totalPoints >= this.POINTS_FOR_MAX_LEVEL) {
            return this.MAX_LEVEL;
        }
        const level = Math.floor(totalPoints / this.BASE_POINTS) + 1;
        return Math.min(level, this.MAX_LEVEL);
    },
    
    getPointsNeededForLevel: function(level) {
        if (level >= this.MAX_LEVEL) {
            return this.POINTS_FOR_MAX_LEVEL;
        }
        return (level - 1) * this.BASE_POINTS;
    },
    
    getPointsNeededForNextLevel: function(level) {
        if (level >= this.MAX_LEVEL) {
            return this.POINTS_FOR_MAX_LEVEL;
        }
        return level * this.BASE_POINTS;
    },
    
    getProgressToNextLevel: function(totalPoints) {
        const currentLevel = this.calculateLevel(totalPoints);
        if (currentLevel >= this.MAX_LEVEL) {
            return 100;
        }
        const currentLevelStart = this.getPointsNeededForLevel(currentLevel);
        const nextLevelStart = this.getPointsNeededForNextLevel(currentLevel);
        const pointsInCurrentLevel = totalPoints - currentLevelStart;
        const pointsNeededForLevel = nextLevelStart - currentLevelStart;
        return Math.floor((pointsInCurrentLevel / pointsNeededForLevel) * 100);
    }
};

// User Profile
let userProfile = {
    name: 'Player123',
    totalPoints: 0,
    currentLevel: 1,
    avatar: 'P',
    gamesPlayed: 0,
    totalScore: 0,
    achievements: []
};

// Leaderboard Data
const leaderboardData = {
    all: [
        { rank: 1, name: 'ProGamer123', points: 450000, level: 2850, avatar: 'P' },
        { rank: 2, name: 'PixelMaster', points: 420000, level: 2800, avatar: 'PM' },
        { rank: 3, name: 'GameKing99', points: 385000, level: 2750, avatar: 'G' },
        { rank: 4, name: 'NinjaGamer', points: 350000, level: 2700, avatar: 'N' },
        { rank: 5, name: 'ThunderStrike', points: 310000, level: 2650, avatar: 'T' },
        { rank: 6, name: 'ShadowPlayer', points: 280000, level: 2600, avatar: 'S' },
        { rank: 7, name: 'FrostByte', points: 245000, level: 2550, avatar: 'F' },
        { rank: 8, name: 'EchoKnight', points: 210000, level: 2500, avatar: 'E' },
        { rank: 9, name: 'VortexGamer', points: 175000, level: 2450, avatar: 'V' },
        { rank: 10, name: 'LunaStars', points: 140000, level: 2400, avatar: 'L' }
    ]
};

// Sample Community Posts
const communityPosts = [
    {
        id: 1,
        author: 'ProGamer123',
        avatar: 'P',
        content: 'Just reached level 2850! The grind is real. Keep pushing everyone! 🚀',
        achievement: '🏆 Milestone: Reached Level 2850!',
        time: '2 hours ago',
        likes: 145,
        comments: 32
    },
    {
        id: 2,
        author: 'PixelMaster',
        avatar: 'PM',
        content: 'Memory Match is insane! Got a new high score of 5200 points! Who can beat that? 🧠',
        achievement: null,
        time: '4 hours ago',
        likes: 98,
        comments: 25
    },
    {
        id: 3,
        author: 'GameKing99',
        avatar: 'G',
        content: 'Anyone trying to reach level 3000? Let\'s form a crew and support each other!',
        achievement: null,
        time: '6 hours ago',
        likes: 76,
        comments: 42
    },
    {
        id: 4,
        author: 'NinjaGamer',
        avatar: 'N',
        content: 'Finally got 500000 points! Level 3000 is achievable! Props to this amazing community 💜',
        achievement: '👑 MAX LEVEL: Reached Level 3000!',
        time: '8 hours ago',
        likes: 287,
        comments: 103
    }
];

// Trending Games
const trendingGames = [
    { name: 'Flappy Bird', plays: '12.5K', trend: '↑ 15%' },
    { name: 'Snake', plays: '10.2K', trend: '↑ 8%' },
    { name: 'Memory Match', plays: '9.8K', trend: '↓ 2%' },
    { name: 'Wordle', plays: '8.5K', trend: '↑ 25%' },
    { name: '2048', plays: '7.3K', trend: '↑ 12%' }
];

// Top Players
const topPlayers = [
    { name: 'ProGamer123', level: 2850, points: 450000 },
    { name: 'PixelMaster', level: 2800, points: 420000 },
    { name: 'GameKing99', level: 2750, points: 385000 },
    { name: 'NinjaGamer', level: 2700, points: 350000 },
    { name: 'ThunderStrike', level: 2650, points: 310000 }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    populateGames('all');
    populateLeaderboard();
    populateCommunityFeed();
    populateTrendingGames();
    populateTopPlayers();
    displayUserProfile();
    updateLocalStorage();
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('profile-btn')) {
                e.preventDefault();
                const section = this.dataset.section;
                if (section) {
                    showSection(section);
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
}

// Section Navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function scrollToSection(sectionId) {
    showSection(sectionId);
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Populate Games
function populateGames(filter) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    const filteredGames = filter === 'all' 
        ? gamesDatabase 
        : gamesDatabase.filter(game => game.category === filter);

    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-banner">${game.emoji}</div>
            <div class="game-card-content">
                <h3 class="game-card-title">${game.name}</h3>
                <span class="game-card-category">${game.category.toUpperCase()}</span>
                <p class="game-card-description">${game.description}</p>
                <div class="game-card-stats">
                    <span>👥 ${game.players}</span>
                    <span>⭐ ${game.rating}</span>
                    <span>+${game.points} pts</span>
                </div>
                <button class="game-card-btn" onclick="startGame(${game.id}, '${game.name}')">Play Now</button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Filter Games
function filterGames(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    populateGames(category);
}

// Populate Leaderboard
function populateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboardTable');
    leaderboardTable.innerHTML = '';

    // Header
    const headerRow = document.createElement('div');
    headerRow.className = 'leaderboard-row header';
    headerRow.innerHTML = `
        <div class="leaderboard-rank">Rank</div>
        <div class="leaderboard-player">Player</div>
        <div class="leaderboard-score">Level</div>
        <div class="leaderboard-score">Points</div>
        <div class="leaderboard-score">Progress</div>
    `;
    leaderboardTable.appendChild(headerRow);

    // Data Rows
    leaderboardData.all.forEach(entry => {
        const row = document.createElement('div');
        row.className = 'leaderboard-row';
        
        let rankEmoji = '';
        let rankClass = '';
        if (entry.rank === 1) {
            rankEmoji = '🥇';
            rankClass = 'gold';
        } else if (entry.rank === 2) {
            rankEmoji = '🥈';
            rankClass = 'silver';
        } else if (entry.rank === 3) {
            rankEmoji = '🥉';
            rankClass = 'bronze';
        }

        const progressPercent = (entry.points / LEVEL_SYSTEM.POINTS_FOR_MAX_LEVEL) * 100;

        row.innerHTML = `
            <div class="leaderboard-rank ${rankClass}">${rankEmoji} #${entry.rank}</div>
            <div class="leaderboard-player">
                <div class="leaderboard-avatar">${entry.avatar}</div>
                <div>
                    <div class="leaderboard-name">${entry.name}</div>
                    <div class="leaderboard-time">Level ${entry.level}</div>
                </div>
            </div>
            <div class="leaderboard-score">Lvl ${entry.level}</div>
            <div class="leaderboard-score">${entry.points.toLocaleString()}</div>
            <div class="leaderboard-score">${progressPercent.toFixed(1)}%</div>
        `;
        
        leaderboardTable.appendChild(row);
    });
}

// Filter Leaderboard
function filterLeaderboard(period) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    populateLeaderboard();
}

// Populate Community Feed
function populateCommunityFeed() {
    const feed = document.getElementById('postsFeed');
    feed.innerHTML = '';

    communityPosts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        
        const achievementHTML = post.achievement 
            ? `<div class="post-achievement">${post.achievement}</div>` 
            : '';
        
        postEl.innerHTML = `
            <div class="post-header">
                <div class="user-avatar-small">${post.avatar}</div>
                <div class="post-author-info">
                    <div class="post-author-name">${post.author}</div>
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

// Populate Trending Games
function populateTrendingGames() {
    const trendingContainer = document.getElementById('trendingGames');
    trendingContainer.innerHTML = '';

    trendingGames.forEach((game, index) => {
        const item = document.createElement('div');
        item.className = 'trending-item';
        item.innerHTML = `
            <div class="trending-name">#${index + 1} ${game.name}</div>
            <div class="trending-count">🎮 ${game.plays} | ${game.trend}</div>
        `;
        trendingContainer.appendChild(item);
    });
}

// Populate Top Players
function populateTopPlayers() {
    const topPlayersContainer = document.getElementById('topPlayersList');
    topPlayersContainer.innerHTML = '';

    topPlayers.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'player-item';
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐';
        item.innerHTML = `
            <div class="player-name">${medal} ${player.name}</div>
            <div class="player-rank">Level ${player.level} • ${player.points.toLocaleString()} pts</div>
        `;
        topPlayersContainer.appendChild(item);
    });
}

// Display User Profile
function displayUserProfile() {
    const currentLevel = LEVEL_SYSTEM.calculateLevel(userProfile.totalPoints);
    const nextLevelPoints = LEVEL_SYSTEM.getPointsNeededForNextLevel(currentLevel);
    const progress = LEVEL_SYSTEM.getProgressToNextLevel(userProfile.totalPoints);
    
    userProfile.currentLevel = currentLevel;
}

// Start Game
function startGame(gameId, gameName) {
    const modal = document.getElementById('gameModal');
    const gameContent = document.getElementById('gameContent');
    const gameTitle = document.getElementById('gameTitle');
    
    gameTitle.textContent = gameName;
    gameContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3 style="font-size: 3rem; margin-bottom: 1rem;">🎮</h3>
            <h4>${gameName}</h4>
            <p style="color: var(--text-secondary); margin: 1rem 0;">Launching game...</p>
            <div style="margin-top: 2rem;">
                <div id="gameContainer"></div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    
    // Initialize the game based on ID
    setTimeout(() => {
        switch(gameId) {
            case 1: initFlappyBird(); break;
            case 2: initTicTacToe(); break;
            case 3: initMemoryGame(); break;
            case 4: initSnakeGame(); break;
            case 5: initWhackAMole(); break;
            case 6: init2048(); break;
            case 7: initWordle(); break;
            case 8: initBreakout(); break;
            case 9: initTetris(); break;
        }
    }, 500);
}

// Close Game Modal
function closeGameModal() {
    document.getElementById('gameModal').classList.remove('show');
}

// Post Modal Functions
function openPostModal() {
    document.getElementById('postModal').classList.add('show');
}

function closePostModal() {
    document.getElementById('postModal').classList.remove('show');
    document.getElementById('postText').value = '';
}

function submitPost() {
    const postText = document.getElementById('postText').value;
    if (postText.trim()) {
        const newPost = {
            id: communityPosts.length + 1,
            author: userProfile.name,
            avatar: userProfile.avatar,
            content: postText,
            achievement: null,
            time: 'just now',
            likes: 0,
            comments: 0
        };
        
        communityPosts.unshift(newPost);
        populateCommunityFeed();
        closePostModal();
        showNotification('Post shared! 🎉', 'success');
    } else {
        showNotification('Please write something!', 'error');
    }
}

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add Points Function
function addPointsToUser(points) {
    const oldLevel = userProfile.currentLevel;
    userProfile.totalPoints += points;
    const newLevel = LEVEL_SYSTEM.calculateLevel(userProfile.totalPoints);
    
    if (newLevel > oldLevel) {
        showNotification(`🎉 Level Up! You reached Level ${newLevel}!`, 'success');
    } else {
        showNotification(`+${points} points earned!`, 'success');
    }
    
    userProfile.currentLevel = newLevel;
    updateLocalStorage();
    displayUserProfile();
}

// Local Storage Management
function updateLocalStorage() {
    localStorage.setItem('playHubProfile', JSON.stringify(userProfile));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('playHubProfile');
    if (saved) {
        userProfile = JSON.parse(saved);
    }
}

// ==================== MINI GAMES ====================

// 1. FLAPPY BIRD
function initFlappyBird() {
    let score = 0;
    let gameOver = false;
    let birdY = 150;
    const gravity = 0.6;
    const jumpPower = 12;
    let velocity = 0;
    let pipes = [];
    let frameCount = 0;

    const container = document.getElementById('gameContent');
    container.innerHTML = `
        <div id="flappyGame" style="width: 400px; height: 500px; background: linear-gradient(to bottom, #87CEEB, #E0F6FF); position: relative; border-radius: 8px; overflow: hidden;"></div>
        <div style="margin-top: 1rem;">
            <button onclick="closeGameModal()" class="btn-secondary">Close Game</button>
        </div>
    `;

    const gameDiv = document.getElementById('flappyGame');
    const bird = document.createElement('div');
    bird.style.cssText = 'position: absolute; width: 30px; height: 30px; left: 50px; font-size: 30px;';
    bird.textContent = '🐦';
    gameDiv.appendChild(bird);

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'position: absolute; top: 10px; left: 10px; color: #333; font-size: 20px; font-weight: bold;';
    scoreDiv.textContent = `Score: ${score}`;
    gameDiv.appendChild(scoreDiv);

    function update() {
        if (gameOver) return;
        
        velocity += gravity;
        birdY += velocity;
        bird.style.top = birdY + 'px';

        frameCount++;
        if (frameCount % 80 === 0) {
            const pipeGap = 100;
            const pipeTop = Math.random() * (300 - pipeGap);
            pipes.push({x: 400, topHeight: pipeTop, scored: false});
        }

        pipes.forEach(pipe => {
            pipe.x -= 5;
            if (pipe.x < 0 && !pipe.scored) {
                pipe.scored = true;
                score += 10;
                scoreDiv.textContent = `Score: ${score}`;
            }
        });

        if (birdY > 500 || birdY < 0) {
            gameOver = true;
            addPointsToUser(score);
        }

        requestAnimationFrame(update);
    }

    document.addEventListener('click', () => {
        if (!gameOver) velocity = -jumpPower;
    }, { once: false });

    update();
}

// 2. TIC TAC TOE
function initTicTacToe() {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const container = document.getElementById('gameContent');
    container.innerHTML = `
        <div style="text-align: center;">
            <h3 id="status" style="margin-bottom: 1rem; color: #667eea;">Your turn (X)</h3>
            <div id="board" style="display: grid; grid-template-columns: repeat(3, 100px); gap: 10px; margin: 0 auto; margin-bottom: 1rem;"></div>
            <button onclick="closeGameModal()" class="btn-secondary">Close Game</button>
        </div>
    `;

    const boardDiv = document.getElementById('board');
    const statusDiv = document.getElementById('status');
    let score = 0;

    board.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.style.cssText = 'width: 100px; height: 100px; background: #1e293b; border: 2px solid #667eea; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; border-radius: 8px;';
        cellDiv.dataset.index = index;
        cellDiv.textContent = board[index];
        
        cellDiv.addEventListener('click', () => {
            if (board[index] === '' && gameActive && currentPlayer === 'X') {
                board[index] = 'X';
                cellDiv.textContent = 'X';
                cellDiv.style.color = '#667eea';
                score += 5;
                
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

    function aiMove() {
        const empty = board.map((cell, i) => cell === '' ? i : null).filter(val => val !== null);
        if (empty.length > 0) {
            const randomIndex = empty[Math.floor(Math.random() * empty.length)];
            board[randomIndex] = 'O';
            document.querySelectorAll('#board > div')[randomIndex].textContent = 'O';
            document.querySelectorAll('#board > div')[randomIndex].style.color = '#ec4899';
            
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
                statusDiv.style.color = board[condition[0]] === 'X' ? '#4caf50' : '#ef4444';
                score += 20;
                addPointsToUser(score);
                return;
            }
        }

        if (!board.includes('')) {
            gameActive = false;
            statusDiv.textContent = "It's a draw!";
            statusDiv.style.color = '#f59e0b';
            addPointsToUser(score);
        }
    }
}

// 3. MEMORY MATCH
function initMemoryGame() {
    const container = document.getElementById('gameContent');
    container.innerHTML = `
        <div style="text-align: center;">
            <h3 id="memoryScore" style="margin-bottom: 1rem; color: #667eea;">Matches: 0/8</h3>
            <div id="memoryBoard" style="display: grid; grid-template-columns: repeat(4, 80px); gap: 10px; margin: 0 auto; margin-bottom: 1rem;"></div>
            <button onclick="closeGameModal()" class="btn-secondary">Close Game</button>
        </div>
    `;

    const emojis = ['🍎', '🍌', '🍒', '🍍', '🥝', '🍓', '🍊', '🥭'];
    let cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    let flipped = [];
    let matched = [];
    let matches = 0;
    let score = 0;

    const boardDiv = document.getElementById('memoryBoard');
    const scoreDiv = document.getElementById('memoryScore');

    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.style.cssText = 'width: 80px; height: 80px; background: linear-gradient(135deg, #667eea, #ec4899); border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 40px; transition: all 0.3s;';
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
                        score += 20;
                        scoreDiv.textContent = `Matches: ${matches}/8`;
                        flipped = [];
                        
                        if (matches === 8) {
                            setTimeout(() => {
                                scoreDiv.textContent = '🎉 You Won!';
                                scoreDiv.style.color = '#4caf50';
                                addPointsToUser(score + 100);
                            }, 300);
                        }
                    } else {
                        setTimeout(() => {
                            const cards1 = document.querySelectorAll('#memoryBoard > div');
                            cards1[flipped[0]].textContent = '?';
                            cards1[flipped[0]].style.background = 'linear-gradient(135deg, #667eea, #ec4899)';
                            cards1[flipped[1]].textContent = '?';
                            cards1[flipped[1]].style.background = 'linear-gradient(135deg, #667eea, #ec4899)';
                            flipped = [];
                        }, 800);
                    }
                }
            }
        });

        boardDiv.appendChild(cardDiv);
    });
}

// 4. SNAKE GAME
function initSnakeGame() {
    const container = document.getElementById('gameContent');
    container.innerHTML = `
        <div style="text-align: center;">
            <h3 id="snakeScore" style="margin-bottom: 1rem; color: #667eea;">Score: 0</h3>
            <canvas id="snakeCanvas" width="400" height="400" style="background: #1e293b; border: 2px solid #667eea; border-radius: 8px; margin-bottom: 1rem;"></canvas>
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Use Arrow Keys to Move</div>
            <button onclick="closeGameModal()" class="btn-secondary">Close Game</button>
        </div>
    `;

    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    let snake = [{x: 10, y: 10}];
    let food = {x: 15, y: 15};
    let direction = {x: 1, y: 0};
    let nextDirection = {x: 1, y: 0};
    let score = 0;
    let gameOver = false;

    const scoreDiv = document.getElementById('snakeScore');

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
            addPointsToUser(Math.floor(score / 2));
            return;
        }

        for (let segment of snake) {
            if (head.x === segment.x && head.y === segment.y) {
                gameOver = true;
                scoreDiv.textContent = `Game Over! Final Score: ${score}`;
                addPointsToUser(Math.floor(score / 2));
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
        ctx.fillRect(0, 0, canvas.width, canvas.height);

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

// 5. WHACK A MOLE
function initWhackAMole() {
    const container = document.getElementById('gameContent');
    container.innerHTML = `
        <div style="text-align: center;">
            <h3 id="moleScore" style="margin-bottom: 1rem; color: #667eea;">Score: 0 | Time: 30s</h3>
            <div id="moleBoard" style="display: grid; grid-template-columns: repeat(3, 100px); gap: 10px; margin: 0 auto; margin-bottom: 1rem;"></div>
            <button onclick="closeGameModal()" class="btn-secondary">Close Game</button>
        </div>
    `;

    const boardDiv = document.getElementById('moleBoard');
    const scoreDiv = document.getElementById('moleScore');

    let score = 0;
    let timeLeft = 30;
    let gameActive = true;

    const holes = [];
    for (let i = 0; i < 9; i++) {
        const hole = document.createElement('div');
        hole.style.cssText = 'width: 100px; height: 100px; background: #1e293b; border: 3px solid #667eea; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 50px; cursor: pointer;';
        hole.textContent = '';
        boardDiv.appendChild(hole);
        holes.push(hole);
    }

    function randomHole() {
        return holes[Math.floor(Math.random() * holes.length)];
    }

    function showMole() {
        if (!gameActive) return;
        
        const hole = randomHole();
        hole.textContent = '🦡';
        
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
            addPointsToUser(score * 5);
        }
    }, 1000);

    showMole();
}

// 6. 2048
function init2048() {
    const container = document.getElementById('gameContent');
    container.innerHTML = `
        <div style="text-align: center;">
            <h3 id="score2048" style="margin-bottom: 1rem; color: #667eea;">Score: 0</h3>
            <div id="board2048" style="display: grid; grid-template-columns: repeat(4, 80px); gap: 10px; margin: 0 auto; margin-bottom: 1rem; background: #0f172a; padding: 10px; border-radius: 8px;"></div>
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Use Arrow Keys</div>
            <button onclick="closeGameModal()" class="btn-secondary">Close Game</button>
        </div>
    `;

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
        const boardDiv = document.querySelector('#board2048');
        boardDiv.innerHTML = '';

        grid.forEach((row) => {
            row.forEach((cell) => {
                const cellDiv = document.createElement('div');
                cellDiv.style.cssText = `width: 80px; height: 80px; background: ${cell === 0 ? '#1e293b' : '#667eea'}; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: white;`;
                cellDiv.textContent = cell === 0 ? '' : cell;
                boardDiv.appendChild(cellDiv);
            });
        });
    }

    function move(direction) {
        if (direction === 'left' || direction === 'right') {
            for (let i = 0; i < 4; i++) {
                if (direction === 'right') grid[i].reverse();
                
                for (let k = 0; k < 4; k++) {
                    if (grid[i][k] === 0) {
                        grid[i].splice(k, 1);
                        grid[i].push(0);
                        k--;
                    }
                }

                for (let j = 0; j < 3; j++) {
                    if (grid[i][j] !== 0 && grid[i][j] === grid[i][j + 1]) {
                        grid[i][j] *= 2;
                        score += grid[i][j];
                        grid[i].splice(j + 1, 1);
                        grid[i].push(0);
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

        document.getElementById('score2048').textContent = `Score: ${score}`;
        render();
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); move('left'); }
        if (e.key === 'ArrowRight') { e.preventDefault(); move('right'); }
    });

    addNewTile();
    addNewTile();
    render();
}

// Placeholder games for remaining titles
function initWordle() {
    document.getElementById('gameContent').innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3>🎮 Wordle</h3>
            <p style="color: var(--text-secondary); margin: 1rem 0;">Game coming soon!</p>
            <button onclick="closeGameModal()" class="btn-secondary">Close</button>
        </div>
    `;
}

function initBreakout() {
    document.getElementById('gameContent').innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3>🎮 Breakout</h3>
            <p style="color: var(--text-secondary); margin: 1rem 0;">Game coming soon!</p>
            <button onclick="closeGameModal()" class="btn-secondary">Close</button>
        </div>
    `;
}

function initTetris() {
    document.getElementById('gameContent').innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3>🎮 Tetris</h3>
            <p style="color: var(--text-secondary); margin: 1rem 0;">Game coming soon!</p>
            <button onclick="closeGameModal()" class="btn-secondary">Close</button>
        </div>
    `;
}

// Close modal on overlay click
window.addEventListener('click', (e) => {
    const modal = document.getElementById('gameModal');
    const postModal = document.getElementById('postModal');
    
    if (e.target === modal) closeGameModal();
    if (e.target === postModal) closePostModal();
});

// Search games
document.getElementById('searchInput')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = gamesDatabase.filter(game => 
        game.name.toLowerCase().includes(searchTerm)
    );
    
    const gamesGrid = document.getElementById('gamesGrid');
    if (gamesGrid) {
        gamesGrid.innerHTML = '';
        filtered.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <div class="game-card-banner">${game.emoji}</div>
                <div class="game-card-content">
                    <h3 class="game-card-title">${game.name}</h3>
                    <span class="game-card-category">${game.category.toUpperCase()}</span>
                    <p class="game-card-description">${game.description}</p>
                    <div class="game-card-stats">
                        <span>👥 ${game.players}</span>
                        <span>⭐ ${game.rating}</span>
                        <span>+${game.points} pts</span>
                    </div>
                    <button class="game-card-btn" onclick="startGame(${game.id}, '${game.name}')">Play Now</button>
                </div>
            `;
            gamesGrid.appendChild(gameCard);
        });
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load user data on startup
loadFromLocalStorage();