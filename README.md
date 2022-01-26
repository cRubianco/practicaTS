# practicaTS
Desarrollo de un servidor en TypeScript

# Instalar TypeScript 
Necesito instalar TypeScript de manera global y tambien de manera local

  Para instalar typescript de manera global
    
    npm i -g typescript

  Para instalar typescript de manera local como dependencia de desarrollo
    
    npm i typescript --save-dev

  Para saber que versión de TypeScript tengo instalada
    
    tsc --version

# Inicializar el proyecto
Para inicializar el proyecto dentro de la carpeta
  
  npm init -y

Esto nos crearan el archivo package.json

# Crear un archivo vacio 
  Crear un archivo vacio llamado app.ts

# Generar el archivo tsconfig
  Para generar el archivo de configuración de TypeScript 
    
    tsc --init

  Esto nos genera el archivo tsconfig.json el que modifico para este proyecto
  habilitando lo siguiente:

    "moduleResolution": "node",     
    "sourceMap": true,
    "outDir": "./dist",         // debo crear la carpeta dist 

# Instalar dependencias de desarrollo

    npm i tslint nodemon --save-dev

# Inicializar el archivo tslint
  Creo un archivo tslint.json con lo siguiente:
  
  {
    "defaultSeverity": "error",
    "extends": [
      "tslint:recommended"
    ],  
    "jsRules": {},
    "rules": {
      "no-console": false
    }, 
    "rulesDirectory": []
  }    
  
