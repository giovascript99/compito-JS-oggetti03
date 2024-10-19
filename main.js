let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': [] },
        { 'name': 'Paola', 'scores': [] },
        { 'name': 'Filippo', 'scores': [] },
        { 'name': 'Giuseppe', 'scores': [] }
    ],

    addNewPlayer: function(name){
        this.players.push({ name, 'scores': [] });
    },

    generateRandomScores: function(){
        this.players.forEach(player => {
            for (let i = 0; i < 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
            }
        });
    },

    calculateTotalScore: function(){
        this.players.forEach(player => {
            player.totalScore = player.scores.reduce((acc, score) => acc + score, 0);
        });
    },

    getWinner: function(){
        this.players.sort((a, b) => b.totalScore - a.totalScore);
        return this.players[0];
    },

    getRanking: function(){
        this.calculateTotalScore();
        this.players.sort((a, b) => b.totalScore - a.totalScore);
        return this.players;
    },
}


bowling.addNewPlayer('Giovanni')
bowling.addNewPlayer('Federica')

bowling.generateRandomScores();
bowling.calculateTotalScore();

console.log('Vincitore: ', bowling.getWinner());
console.log('Classifica: ', bowling.getRanking());


