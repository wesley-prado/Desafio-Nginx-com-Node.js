# Desafio Nginx com Node.js
 
Este projeto é um desafio para criar um proxy reverso Nginx para um servidor Node.js e fazer com que o servidor Node.js se comunique com um contêiner MySQL para inserir registros de pessoas e mostrar uma lista de pessoas inseridas. Estamos usando o Docker Compose para gerenciar nossos contêiners.

## Pré-requisitos

- Docker
- Docker Compose

## Como executar o projeto

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para iniciar todos os serviços:

```sh
docker-compose up -d
```

## Estrutura do projeto

`nginx`: Este serviço atua como um proxy reverso para o nosso servidor Node.js. A configuração do Nginx pode ser encontrada em nginx/nginx.conf.

`node`: Este é o nosso servidor Node.js. Ele se comunica com o contêiner MySQL para inserir registros de pessoas e mostrar uma lista de pessoas inseridas. O código do servidor pode ser encontrado em node/app.js e o componente de lista em node/components/List.js.

`mysql`: Este é o nosso contêiner MySQL onde os registros de pessoas são armazenados.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE]() para mais detalhes.