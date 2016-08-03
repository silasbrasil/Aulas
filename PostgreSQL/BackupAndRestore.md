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

##### Restaurando o Banco de Dados

Para restaurar uma base de dados, primeiro é necessário criar um banco de dados, você pode fazer isso utilizando o *template0* da seguinte forma:

```sh
$ createdb -T template0 nome_do_banco
```
Agora você pode restaurar sua base de dados sem problemas
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

Uma importante vantagens do *pg_dump* é que ele pode ser restaurado em qualquer versão mais recente do PostgreSQL, ou seja, ele pode ser usado como ferramenta de migração de uma versão para outra. <br />

**Importante:** Para fazer backup de OID é necessário utilizar a opção *-o* na linha de comando.

##### Usando pg_dumpall
Em casos onde há regras e tablespaces, ou seja, um cluster de banco de dados em PostgreSQL o *pg_dumpall* suporta esse tipo de operação. O *pg_dumpall* preserva todas as informações do cluster.