const ExistedElements = {
    leg: 'leg',
    hypotenuse: 'hypotenuse',
    adjacentAngle: 'adjacent angle',
    oppositeAngle: 'opposite angle',
    angle: 'angle',
    display: function() {
        console.table(ExistedElements);
    }
};

ExistedElements.display();

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function triangle(val1, type1, val2, type2) {
    let conditions = type1 + type2;

    if(val1 <= 0 || val2 <= 0) {
        return console.log('Value cannot be less or equal than zero!');   
    }

    if((type1.search('angle') && val1 > 89) || (type2.search('angle') && val2 > 89))
        return console.log('Angle cannot be above 89 degree!');

    switch(conditions) {
        case 'legleg':
            leglegCalculation(val1, val2);
            break;
        case 'leghypotenuse':
            legHypotenuseCalculation(val1, val2);
            break;
        case 'hypotenuseleg':
            legHypotenuseCalculation(val2, val1);
            break;
        case 'legadjacent angle':
            legAdjacentAngle(val1, val2);
            break;
        case 'adjacent angleleg':
            legAdjacentAngle(val2, val1);
            break;
        case 'legopposite angle':
            legOppositeAngle(val1, val2);
            break;
        case 'opposite angleleg':
            legOppositeAngle(val2, val1);
            break;
        case 'hypotenuseangle':
            hypotenuseAngle(val1, val2);
            break;
        case 'anglehypotenuse':
            hypotenuseAngle(val2, val1);
            break;
        default:
            console.log('Inappropriate meaning of argument type. Look above in the table!'); 
    }
}

function leglegCalculation(val1, val2) {
    let hypotenuse = Math.sqrt(Math.pow(val1,2) + Math.pow(val2,2));
    let corner = Math.asin(val1/hypotenuse);
    let cornerA = radiansToDegrees(corner);

    console.log('Opposite angle = ' + Math.round(cornerA));
    console.log('Adjacent angle = ' + Math.round(90 - cornerA));
    console.log('Hypotenuse = ' + hypotenuse);
    console.log('Success');
}

function legHypotenuseCalculation(val1, val2) {
    let corner = Math.asin(val1/val2);
    let cornerA = radiansToDegrees(corner);

    console.log('Opposite angle = ' + Math.round(cornerA));
    console.log('Adjacent angle = ' + Math.round(90 - cornerA));
    console.log('Leg = ' + Math.sqrt(Math.pow(val2,2) - Math.pow(val1,2)));
    console.log('Success');
}

function legAdjacentAngle(val1, val2) {
    let hypotenuse = val1 / Math.cos(degreesToRadians(val2));
    
    console.log('Opposite angle = ' + (90 - val2));
    console.log('Hypotenuse = ' + Math.round(hypotenuse));
    console.log('Leg = ' + Math.round(Math.sqrt(Math.pow(hypotenuse,2) - Math.pow(val1,2))));
    console.log('Success');
}

function legOppositeAngle(val1, val2) {
    let hypotenuse = val1 / Math.sin(degreesToRadians(val2));

    console.log('Adjacent angle = ' + (90 - val2));
    console.log('Hypotenuse = ' + Math.round(hypotenuse));
    console.log('Leg = ' + Math.round(Math.sqrt(Math.pow(hypotenuse,2) - Math.pow(val1,2))));
    console.log('Success');
}

function hypotenuseAngle(val1, val2) {
    console.log('Angle = ' + (90 - val2));
    console.log('LegA = ' + Math.round(val1 * Math.cos(degreesToRadians(val2))));
    console.log('LegB = ' + Math.round(val1 * Math.sin(degreesToRadians(val2))));
    console.log('Success');
}