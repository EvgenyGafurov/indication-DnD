let arrowH = document.querySelector('.container_arrow')
let arrowV = document.querySelector('.container_arrow_V')
let indication_block = document.querySelector('.container_triangle_H');
let containerH = document.querySelector('.container_H');
let container = {}


// функция поворота горизонтальнонго треугольника
function moveBlockH(event) {
    let center_container = containerH.getBoundingClientRect();

    let cx = (center_container.left + center_container.width / 2),

        cy = center_container.top + center_container.height / 2;

    let angle = Math.atan2(event.y - cy , event.x - cx) + Math.PI / 2;
    let convert = angle * (180 / Math.PI);
    if (convert > 180) {
        convert -= 360;
    }

    let rotate = convert.toFixed(2)

    container.rotateH = rotate

    indication_block.style.transform = "rotate("+ rotate + "deg)"
}

containerH.addEventListener('mousedown', function (event) {
    event.preventDefault();
    containerH.onmousemove = moveBlockH
})

containerH.addEventListener('mouseup', function () {
document.querySelector('.arrowH_meaning').value = container.rotateH + '\u00B0'
    arrowH.style.transform = 'rotate(' + container.rotateH + 'deg )';
    arrowH.style.transitionDuration = '1s'
    containerH.onmousemove = null
})








let containerV = document.querySelector('.container_V')
let indication_blockV = document.querySelector('.container_triangle_V')

// функция поворота вертикального треугольника
function moveBlockV(event) {
    let centerV_container = containerV.getBoundingClientRect();

    let cx = (centerV_container.left + centerV_container.width / 2)+100.5,

        cy = (centerV_container.top + centerV_container.height / 2)+73;

    let angleV = Math.atan2(event.y - cy , event.x - cx)+Math.PI;
    let convertV = angleV * (180 / Math.PI);
    if (convertV > 180) {
        convertV -= 360;
    }
    let rotateV = convertV.toFixed(2)

    if(rotateV>90)
    {rotateV=90}
    else if (rotateV<-5)
    {rotateV=-5}

    container.rotateV = rotateV
        indication_blockV.style.transform = "rotate("+ rotateV + "deg)"
}

containerV.addEventListener('mousedown', function (event) {
    event.preventDefault();
    containerV.onmousemove = moveBlockV

    containerV.addEventListener('mousemove',function () {
        document.querySelector('.triangleV_meaning').value=container.rotateV + '\u00B0'

    })
})


containerV.addEventListener('mouseup', function () {
    document.querySelector('.arrowV_meaning').value = container.rotateV + '\u00B0'
    containerV.onmousemove = null
    arrowV.style.transform = 'rotate(' + container.rotateV + 'deg )';
    arrowV.style.transitionDuration = '1s'
})


