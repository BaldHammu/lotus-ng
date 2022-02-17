# lotus-ng
Deliverable 01
Boa tarde, neste readme irei demonstrar os passos necessarios, para fazer com que o website funcione em sua maquina.

Os requisitos são:
.NodeJS: No meu caso eu utilizei a ultima versão disponibilizada, o codigo foi feito com base no NodeJS 17.5.0.
https://nodejs.org/pt-br/
.NPM: Junto ao node foi instalado o gerenciador de pacotes NPM 8.3.

Após a instalação dos pacotes iniciais o código deve ser baixado em meu repositório:
pending

Para abrir o projeto é necessario navegar até a pasta ./login, após isso deve-se abrir um cmd dentro dela.
Já dentro da pasta devemos baixar o Angular CLI caso não esteja instalado, podemos fazer isso utilizando o comando:
npm install -g @angular/cli
Utilizei também alguns pacotes externos para criar o front, visto que eles já se encontram no código para abrir o site devemos apenas digitar:"ng serve --open" no console que foi aberto.
É necessário também uma instância do JSON Server aberto no port 3000 do localhost, este também deve ser executado em um prompt de comando separado.
Ele pode ser instalado através do comando:"npm install -g json-server", após isso pode ser aberto através do comando "json-server --watch db.json". O arquivo db.json se encontra dentro da pasta login.
Caso o JSON server abra em um port diferente, o port deve ser atualizado nos arquivos "registro.component.ts","login.component.ts";  
