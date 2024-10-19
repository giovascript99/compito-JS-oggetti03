let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': [] },
        { 'name': 'Paola', 'scores': [] },
        { 'name': 'Filippo', 'scores': [] },
        { 'name': 'Giuseppe', 'scores': [] }
    ],

    generateRandomScores: function(){
        this.players.forEach(player => {
            for (let i = 1; i <= 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
            console.log(player.scores);
        });
    },
    
    addNewPlayer: function(nome){
        let newPlayer = {name: nome, scores: []}
        for (let i = 1; i <= 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        this.players.push(newPlayer)
        console.log(newPlayer.scores);
    },

    calculateTotalScore: function(){
        this.players.forEach(player => {
            let tot = player.scores.reduce((acc, num)=> acc + num)
            player.total = tot
        })
        this.players.sort((a, b)=> b.total - a.total)
    },

    getWinner: function(){
        let winner = this.players[0]
        console.log(`IL VINCITORE E' ${winner.name} con ${winner.total} punti`)
    },

    getRanking: function(){
        console.log(`CLASSIFICA FINALE:`)
        this.players.forEach(player => {
            console.log(`${player.name} con ${player.total} punti`);
        })
    }
}

bowling.generateRandomScores()
bowling.addNewPlayer('Mario')
bowling.calculateTotalScore()
bowling.getWinner()
bowling.getRanking()


