// better solution is to map icons to an object

collegeTeamLogo(icon)
    switch (icon) {
        case 'Tennessee Volunteers':
        return 'assets/images/vols.png'
        case 'Vanderbilt Commodores':
        return 'assets/images/vandy.png'
        case 'Alabama Crimson Tide':
        return 'assets/images/bama.png'
        case 'Auburn Tigers':
        return 'assets/images/auburn.png'
        case 'Ole Miss':
        return 'assets/images/bama.png'
        case 'Florida Gators':
        return 'assets/images/gators.png'
        case 'Oregon Ducks':
        return 'assets/images/ducks.png'
        case 'Oregon State Beavers':
        return 'assets/images/beavers.png'
        default:
        return 'assets/images/football.png'
    }
