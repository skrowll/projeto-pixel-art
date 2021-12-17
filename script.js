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

