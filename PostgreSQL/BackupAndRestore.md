# Backup e Restore PostgreSQL

### Introdução

Há diferentes abordagens para o backup de uma base de dados em PotgreSQL, elas basicamentes três

1. SQL Dump
2. File System Level Backup
3. Continuous Archiving and Point-in-Time Recovery (PITR)

### SQL Dump

A ideia por traz do SQL Dump é criar um arquivo de texto com os comandos SQL reponsavéis por restaurar o Banco de Dados para o estado em que ele estava no momento em que o dump foi realizado. O dump se comporta como um snapshot do seu DB, sendo possível até a migração para diferente arquitetura como de 32 bits para 64 bits. Para realizar o dump é utilizado um programa chamado *pg_dump*, a forma básica para o uso desse comando é:

```sh
$ pg_dump nome_do_banco > /diretorio/nome_do_arquivo	
```

Restaurando o Banco de Dados:
```sh
$ psql nome_do_banco < /diretorio/nome_do_arquivo
```

Caso você precise especificar o **host** e a **porta** do Banco de Dados, a sintaxe ficará da seguinte forma:
```sh
$ pg_dump -h host -p xxxx nome_do_banco > /diretorio/nome_do_arquivo
```
Para restaurar:
```sh
$ psql -h host -p xxxx nome_do_banco < /diretorio/nome_do_arquivo
```

Uma importante vantagens do *pg_dump* é que ele pode ser restaurado em qualquer versão mais recente do PostgreSQL, ou seja, ele pode ser usado como ferramenta de migração de uma versão para outra.
