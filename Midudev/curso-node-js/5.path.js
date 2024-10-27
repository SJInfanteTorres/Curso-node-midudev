const path = require('node:path');

// Nos muestra barra separadora de carpetas segun sistema operativo
console.log(path.sep);

//unir rutas con path.join//
const filePath = path.join('content','subfolder','test.txt');
console.log(filePath);

// este nos da el nombre de una ruta solo el nombre del archivo
const base = path.basename('/tmp.samu-secrect-files/password.txt')
console.log(base);

//incluso le puedo decir que quite la extension de la siguiente manera
const fileName = path.basename('/tmp.samu-secrect-files/password.txt', '.txt')
console.log(fileName);


// Unos de los mas utiles es la extension
const extension = path.extname('image.jpg');
console.log(extension);