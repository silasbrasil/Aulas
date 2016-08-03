# Backup e Restore PostgreSQL #
<br />
## Diferentes Abordagens para Backup ##
<br />
1. SQL Dump
<br />
	A ideia por traz do SQL Dump é criar um arquivo de texto com o comandos SQL reponsavéis por restaurar o Banco de Dados para o estado em que ele estava no momento em que o dump foi realizado. Para realizar o dump é utilizado um programa chamado *pg_dump*, a forma básica para o uso desse comando é: 
	<br />
	```
	pg_dump *nome_do_banco* > /diretorio/nome_do_arquivo
	```
	<br />
	Restaurando o Banco de Dados
	<br />
	```bash
	psql *nome_do_banco* < /diretorio/nome_do_arquivo
	```
	<br />
	Caso você precise especificar o host e a porta do Banco de Dadosa sintaxe ficará da seguinte forma:
	<br />
	```bash
	pg_dump -h *host* -p *xxxx* *nome_do_banco* > /diretorio/nome_do_arquivo
	```
	```bash
	psql -h *host* -p *xxxx* *nome_do_banco* < /diretorio/nome_do_arquivo
	```