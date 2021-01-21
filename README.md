# videos-mfk

Utilitário para coleta de dados usando api do Youtube

### Instalação

videos-mfk utiliza [Node.js](https://nodejs.org/).

Instalar as dependências e executar script principal.

```sh
$ npm install
$ npm start
```

Download subtitles
```youtube-dl --sub-lang 'pt' --write-sub --write-auto-sub --skip-download --output "%(id)s.%(ext)s" -a ../../videos.txt```