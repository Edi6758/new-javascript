//o webpaco pega uma série de arquivos, modulos e etc e empacota em um único arquivo
//voce pode executar o babel junto com o webpack para empacotar tudo.
//o webpack empacota tudo em um único arquivo compilado removendo a necessidade de ter a node modules

//utilizando webpack

//npm init -y
//npm install --save-dev webpack webpack-cli
//npm install --save dayjs

import dayjs from 'dayjs'

alert(`Hoje é: ${dayjs().format("DD/MM/YYYY")}`)

//npx webpack