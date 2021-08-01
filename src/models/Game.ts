import Brood from './Brood';
import WarrenMap from './WarrenMap';

export default new ( class Game {
    public currentBrood: Brood[] = [];
    public health: number = 100;
    public food: number = 10;
    public warren: WarrenMap = new WarrenMap();
} )(); 