function gameObject() {
	const ourObject = {
		home: {
			teamName: 'Brooklyn Nets',
			colors: ['Black', 'White'],
			players: {
				"Alan Anderson": {
					"number": 0,
					"shoe": 16,
					"points": 22,
					"rebounds": 12,
					"assists": 12,
					"steals": 3,
					"blocks": 1,
					"slamDunks": 1,
				},
				"Reggie Evans": {
					"number": 30,
					"shoe": 14,
					"points": 12,
					"rebounds": 12,
					"assists": 12,
					"steals": 12,
					"blocks": 12,
					"slamDunks": 7,
				},
				"Brook Lopez": {
					"number": 11,
					"shoe": 17,
					"points": 17,
					"rebounds": 19,
					"assists": 10,
					"steals": 3,
					"blocks": 1,
					"slamDunks": 15,
				},
				"Mason Plumlee": {
					"number": 1,
					"shoe": 19,
					"points": 26,
					"rebounds": 12,
					"assists": 6,
					"steals": 3,
					"blocks": 8,
					"slamDunks": 5,
				},
				"Jason Terry": {
					"number": 31,
					"shoe": 15,
					"points": 19,
					"rebounds": 2,
					"assists": 2,
					"steals": 4,
					"blocks": 11,
					"slamDunks": 1,
				},
			},
		},
		"away": {
			teamName: 'Charlotte Hornets',
			colors: ['Turqoise', 'Purple'],
			players: {
				"Jeff Adrien": {
					"number": 4,
					"shoe": 18,
					"points": 10,
					"rebounds": 1,
					"assists": 1,
					"steals": 2,
					"blocks": 7,
					"slamDunks": 2
				},
				"Bismak Biyombo": {
					"number": 0,
					"shoe": 16,
					"points": 12,
					"rebounds": 4,
					"assists": 7,
					"steals": 7,
					"blocks": 15,
					"slamDunks": 10
				},
				"DeSagno Diop": {
					"number": 2,
					"shoe": 14,
					"points": 24,
					"rebounds": 12,
					"assists": 12,
					"steals": 4,
					"blocks": 5,
					"slamDunks": 5
				},
				"Ben Gordon": {
					"number": 8,
					"shoe": 15,
					"points": 33,
					"rebounds": 3,
					"assists": 2,
					"steals": 1,
					"blocks": 1,
					"slamDunks": 0
				},
				"Brendon Haywood": {
					"number": 35,
					"shoe": 15,
					"points": 6,
					"rebounds": 12,
					"assists": 12,
					"steals": 22,
					"blocks": 5,
					"slamDunks": 12
				},
			},
		},
	}
	return ourObject
}

// function homeTeamName() {
// 	return gameObject()['home']['teamName']
// }
//abstract out into variables different things to look into
const game = gameObject()

const allPlayers = Object.assign({}, game.home.players, game.away.players)

function numPointsScored(playerName) {	
	return allPlayers[playerName].points
	// for(player in allPlayers) {
	// 	if (player === playerName) {
	// 		return allPlayers[player].points
	// 	}
	// }

}

function shoeSize(playerName) {
	// first step is to combine the players into one object by going into the home and away objects and grabbing the players back out
	// const game = gameObject();
	//combine players using spread operator or Object.assign()
	// const allPlayers = Object.assign({}, game.home.players, game.away.players)
	return allPlayers[playerName].shoe
}

function teamColors(teamName) {
	if (teamName === game.home.teamName) {
		return game.home.colors;
	} else if (teamName === game.away.teamName) {
		return game.away.colors;
	} else {
		"this team isn't playing today"
	}
}

function teamNames() {
	let newArray = [];
	newArray.push(game.home.teamName);
	newArray.push(game.away.teamName);
	return newArray;
}