//Dana jest prosta o ruwnaniu 3x +4y -4 = 0
//i punkt p(x,y)
//napisz program sprawdzajacy czy punnkt p jalezy do danej prostej
//sqrt() means squared
//abs() means absolute
function find(x,y) {
    let punkt = Math.abs(3*x + 4*y - 4) / Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
    if(punkt == 0) {
        console.lot("nasz punkt nalezy o prostej");
    }else {
        console.log("nasz punkt nie nalezy do prostej");
    }
}
find(0,1);

