# Backup e Restore PostgreSQL

### Introdução

Há diferentes abordagens para o backup de uma base de dados em PotgreSQL, elas basicamentes três

1. SQL Dump
2. File System Level Backup
3. Continuous Archiving and Point-in-Time Recovery (PITR)

### SQL Dump

	A ideia por traz do SQL Dump é criar um arquivo de texto com o comandos SQL reponsavéis por restaurar o Banco de Dados para o estado em que ele estava no momento em que o dump foi realizado. Para realizar o dump é utilizado um programa chamado *pg_dump*, a forma básica para o uso desse comando é:
<p>
```shell
pg_dump nome_do_banco > /diretorio/nome_do_arquivo	
```
</p>
Restaurando o Banco de Dados
```
psql *nome_do_banco* < /diretorio/nome_do_arquivo
```

Caso você precise especificar o host e a porta do Banco de Dadosa sintaxe ficará da seguinte forma:
```shell
pg_dump -h *host* -p *xxxx* *nome_do_banco* > /diretorio/nome_do_arquivo
	```
	```shell
	psql -h *host* -p *xxxx* *nome_do_banco* < /diretorio/nome_do_arquivo
	```
2.
