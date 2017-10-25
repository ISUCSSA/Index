import WEATHERS from './weathers';

export default function (weather) {
    console.log(weather);
    switch (weather) {
        case WEATHERS.SUN:
            return ["fff353", "fec039", "fe8c43", "ed6023", "e20909"];
        case WEATHERS.RAIN:
            return ["2a4d7f", "b2c9bf", "956974", "f6acad", "f5d5d9"];
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
            return ["f7f4ea", "ded9e2", "c0b9dd", "80a1d4", "75c9c8"];
        case WEATHERS.BREEZE:
            return ["7bdff2", "b2f7ef", "eff7f6", "f7d6e0", "f2b5d4"];
        default:
            return ["fff353", "fec039", "fe8c43", "ed6023", "e20909"];
    }
}