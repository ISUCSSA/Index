import WEATHERS from './weathers';

const getColor = function (weather) {
    switch (weather) {
        case WEATHERS.SUN:
            return ["fff353", "fec039", "fe8c43", "ed6023", "e20909"];
        case WEATHERS.RAIN:
            return ["f7f4ea", "ded9e2", "c0b9dd", "80a1d4", "75c9c8"];
        case WEATHERS.SNOW:
            return ["ced3dc", "fcf7f8", "84c4e4", "3a8ad3", "505050"];
        case WEATHERS.CLOUD:
            return ["dcdcdd", "c5c3c6", "46494c", "4c5c68", "1985a1"];
        case WEATHERS.FOG:
            return ["ffcdb2", "ffb4a2", "e5989b", "b5838d", "6d6875"];
        case WEATHERS.HAIL:
            return ["e63946", "f1faee", "a8dadc", "457b9d", "1d3557"];
        case WEATHERS.STORM:
            return ["ee6c4d", "f38d68", "662c91", "17a398", "33312e"];
        case WEATHERS.WIND:
            return ["2a4d7f", "b2c9bf", "956974", "f6acad", "f5d5d9"];
        case WEATHERS.BREEZE:
            return ["7bdff2", "b2f7ef", "eff7f6", "f7d6e0", "f2b5d4"];
        case WEATHERS.STAR:
            return ["e42e03", "000000", "f0a202", "ffffff", "151617"];
        case WEATHERS.TWILIGHT:
            return ["05668d", "028090", "00a896", "02c39a", "f0f3bd"];
        case WEATHERS.MIDNIGHT:
            return ["2e1760", "3423a6", "7180b9", "dff3e4", "170a1c"];
        case WEATHERS.NOVA:
            return ["ffb997", "f67e7d", "843b62", "0b032d", "74546a"];
        case WEATHERS.ROSE:
            return ["9c89b8", "f0a6ca", "efc3e6", "f0e6ef", "b8bedd"];
        case WEATHERS.CHAOS:
            return ["f6511d", "ffb400", "00a6ed", "7fb800", "0d2c54"];
        case WEATHERS.RANDOM:
            let ran = Math.floor((Math.random() * 1000)) % 15;
            let all = [
                getColor(WEATHERS.SUN),
                getColor(WEATHERS.RAIN),
                getColor(WEATHERS.SNOW),
                getColor(WEATHERS.CLOUD),
                getColor(WEATHERS.FOG),
                getColor(WEATHERS.HAIL),
                getColor(WEATHERS.STORM),
                getColor(WEATHERS.WIND),
                getColor(WEATHERS.BREEZE),
                getColor(WEATHERS.STAR),
                getColor(WEATHERS.TWILIGHT),
                getColor(WEATHERS.MIDNIGHT),
                getColor(WEATHERS.NOVA),
                getColor(WEATHERS.ROSE),
                getColor(WEATHERS.CHAOS)
            ];
            return all[ran];
        default:
            return ["fff353", "fec039", "fe8c43", "ed6023", "e20909"];
    }
}

export default getColor;