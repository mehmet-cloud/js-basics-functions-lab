function distanceFromHqInBlocks (Value){
    if (Value >= 42) {
        return Value-42
    }
    if(Value < 42) {
        return 42-Value
    }
}

function distanceFromHqInFeet (feet){
    if (feet >= 42){
    return (feet-42)*264
}
    if (feet < 42){
        return (42-feet)*264
    }
}

function distanceTravelledInFeet (block1, block2){
    if (block1 > block2){
    return (block1-block2)*264
    }
    if (block1 < block2){
        return (block2-block1)*264
    }
}

function calculatesFarePrice (start, destination){
    if (Math.abs(start-destination)*264 < 400){
    return 0
}
    if (Math.abs(start-destination)*264 > 400 && Math.abs(start-destination)*264 < 2000){
        return ((Math.abs(start-destination)*264)-400)*0.02
    }

    if (Math.abs(start-destination)*264 > 2000 && Math.abs(start-destination)*264 < 2500){
        return 25
    }
    if (Math.abs(start-destination)*264 > 2500 ){
        return 'cannot travel that far'}
    }
