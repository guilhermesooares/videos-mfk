# videos-mfk

Utilitário para coleta de dados usando api do Youtube

### TODO

#### Coleta

1. Coletar os top 100 kids social blade ✓
2. Coletar os top 250 por país social blade e filtrar por made for kids ⚠️
3. Baixar as legendas ⚠️

#### Análises
4. Caracterizar países e línguas dos canais ✓
5. Buscar por ORGANIZATION nas legendas (vídeos en e pt-BR) usando Spacy. ⚠️
6. Buscar por Nomes Próprios ⚠️
7. Recuperar frases proximas as ORGANIZATION.  ⚠️
8. Recuperar frases proximas a personagens ⚠️
9. Rodar e analisar corextopic model nas legendas ⚠️
https://github.com/gregversteeg/corex_topic/blob/master/corextopic/example/corex_topic_example.ipynb

### Instalação

videos-mfk utiliza [Node.js](https://nodejs.org/).

Instalar as dependências e executar script principal.

```sh
$ npm install
$ npm start
```

Download subtitles
```youtube-dl --sub-lang 'pt' --write-sub --write-auto-sub --skip-download --output "%(id)s.%(ext)s" -a ../../videos.txt```