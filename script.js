let header = document.createElement('header');
document.body.appendChild(header);

let headerH1 = document.createElement('h1');
headerH1.id = 'title';
header.appendChild(headerH1);
headerH1.innerHTML = "Paleta de Cores";

let colorPalette = document.createElement('section');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);

function createColors(colors) {
    for (index = 0; index < colors.length; index += 1) {
        let color = document.createElement('div');
        color.className = 'color';
        color.style.backgroundColor = colors[index];
        colorPalette.appendChild(color);
    }
}
let colors = ['black', 'red', 'green', 'blue'];
createColors(colors);

let pixelBoard = document.createElement('section');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);

function createPixels(size) {
    for (index = 0; index < size; index += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        pixelBoard.appendChild(line);
        for (index2 = 0; index2 < size; index2 += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            line.appendChild(pixel);
        }
    }
}
let size = 5;
createPixels(size);
