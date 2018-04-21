# Meat - Angular App Starter

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/cod3rcursos/meat-app-starter.git`

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start`

## 2. Iniciando o Backend

### Instalando o json-server

`npm install -g json-server`

### Iniciando o serviço (raiz da aplicação)

`json-server db.json`

## Goodies

Expressões regulares usadas na validação de formulários

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

## Upgrade para Angular 4.3

Dependências dos pacotes que devem ficar em package.json:

```
"dependencies": {
    "@angular/animations": "4.3.3",
    "@angular/common": "4.3.3",
    "@angular/compiler": "4.3.3",
    "@angular/core": "4.3.3",
    "@angular/forms": "4.3.3",
    "@angular/platform-browser": "4.3.3",
    "@angular/platform-browser-dynamic": "4.3.3",
    "@angular/router": "4.3.3",
    "admin-lte": "2.3.11",
    "core-js": "2.4.1",
    "font-awesome": "4.7.0",
    "intl": "1.2.5",
    "jquery": "3.1.1",
    "reflect-metadata": "0.1.10",
    "rxjs": "5.4.2",
    "ts-helpers": "1.1.2",
    "web-animations-js": "2.2.5",
    "zone.js": "0.8.16"
  },
  "devDependencies": {
    "@angular/cli": "1.2.7",
    "@angular/compiler-cli": "4.3.3",
    "@types/jasmine": "2.5.53",
    "@types/express": "4.0.37",
    "@types/jsonwebtoken": "7.2.3",
    "@types/node": "7.0.5",
    "codelyzer": "3.1.2",
    "jasmine-core": "2.7.0",
    "jasmine-spec-reporter": "4.1.1",
    "json-server": "0.12.0",
    "jsonwebtoken": "7.4.1",
    "karma": "1.7.0",
    "karma-chrome-launcher": "2.2.0",
    "karma-cli": "1.0.1",
    "karma-jasmine": "1.1.0",
    "karma-remap-istanbul": "0.6.0",
    "protractor": "5.1.2",
    "ts-node": "3.3.0",
    "tslint": "5.5.0",
    "typescript": "2.4.2",
    "webdriver-manager": "12.0.6"
  }
```

## Upgrade para Angular 6 (Apenas para a aulas finais)

Dependências dos pacotes que devem ficar em package.json:

```
"dependencies": {
  "@angular/animations": "6.0.0-rc.5",
  "@angular/common": "6.0.0-rc.5",
  "@angular/compiler": "6.0.0-rc.5",
  "@angular/core": "6.0.0-rc.5",
  "@angular/forms": "6.0.0-rc.5",
  "@angular/platform-browser": "6.0.0-rc.5",
  "@angular/platform-browser-dynamic": "6.0.0-rc.5",
  "@angular/platform-server": "6.0.0-rc.5",
  "@angular/router": "6.0.0-rc.5",
  "admin-lte": "2.3.11",
  "core-js": "2.5.4",
  "font-awesome": "4.7.0",
  "intl": "1.2.5",
  "jquery": "3.1.1",
  "reflect-metadata": "0.1.10",
  "rxjs": "6.0.0-uncanny-rc.7",
  "rxjs-compat": "6.0.0-uncanny-rc.7",
  "ts-helpers": "1.1.2",
  "web-animations-js": "2.2.5",
  "zone.js": "0.8.26",
  "ajv": "6.0.0"
},
"devDependencies": {
  "@angular-devkit/build-angular": "0.5.0",
  "@angular/compiler-cli": "6.0.0-rc.5",
  "@angular/cli": "6.0.0-rc.5",
  "@angular/language-service": "6.0.0-rc.1",
  "@types/jasmine": "2.8.6",
  "@types/jasminewd2": "2.0.3",
  "@types/node": "8.9.4",
  "@types/express": "4.0.37",
  "@types/jsonwebtoken": "7.2.3",
  "codelyzer": "4.2.1",
  "jasmine-core": "2.99.1",
  "jasmine-spec-reporter": "4.2.1",
  "karma": "1.7.1",
  "karma-chrome-launcher": "2.2.0",
  "karma-coverage-istanbul-reporter": "1.4.2",
  "karma-jasmine": "1.1.1",
  "karma-jasmine-html-reporter": "0.2.2",
  "protractor": "5.3.0",
  "ts-node": "5.0.1",
  "tslint": "5.9.1",
  "json-server": "0.12.0",
  "jsonwebtoken": "7.4.1",
  "typescript": "2.7.2",
  "webdriver-manager": "12.0.6"
}
```
## Créditos

Todas as imagens usadas na aplicação são pertencentes a freepik.com
