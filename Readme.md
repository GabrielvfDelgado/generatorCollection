# GeneratorCollection

## PT-BR

1. [Descricão](#descrição)

1. [Implementações futuras](#implementações-futuras)

## EN-US

1. [Description](#description)

1. [Upcoming features](#upcoming-features)

---

## Descrição

O GeneratorCollection é um projeto que tem como intuito gerar uma collection a partir de um swagger. A ideia é padronizar as colletions.

## Implementações futuras

- Gerar nome da colletion utilizando o titulo do swagger;
- Gerar pastas tendo como base a TAG no swagger. Caso o swagger nao tiver TAG, gerar um erro pedindo a TAG do swagger;
- Gerar requests baseadas nos paths e métodos contidos no swagger;
- Colocar os headers nas requests, que sao passados no swagger;
- Nas requests POST e PUT, utilizar o exemplo contido no swagger, para gerar um body no corpo;
- Gerar exemplos de sucesso e de erros, utilizando como base os exemplos contidos no swagger;
- Gerar collection, para ser importada.

---

## Description

The GeneratorCollection is a project that aims to generate a collection from a swagger. The idea is to standardize the collections.

## Upcoming features

- Generate collection name using the swagger title;
- Generate folders based on the TAG in swagger. If the swagger does not have a TAG, generate an error asking for the swagger's TAG;
- Generate requests based on the paths and methods contained in the swagger;
- Place headers in requests, which are passed on swagger;
- In POST and PUT requests, use the example contained in the swagger to generate a body in the body;
- Generate examples of success and errors, using as a basis the examples contained in the swagger;
- Generate collection, to be imported
