# Backup e Restore PostgreSQL #
### Diferentes Abordagens para Backup ###

1. SQL Dump

A ideia por traz do SQL Dump é criar um arquivo de texto com o comandos SQL reponsavéis por restaurar o Banco de Dados para o estado em que ele estava no momento em que o dump foi realizado. Para realizar o dump é utilizado um programa chamado *pg_dump*, a forma básica para o uso desse comando é: 
<p>
```sh
pg_dump *nome_do_banco* > /diretorio/nome_do_arquivo	
```
</p>
Restaurando o Banco de Dados
```javascript
psql *nome_do_banco* < /diretorio/nome_do_arquivo
```
	<br />
	Caso você precise especificar o host e a porta do Banco de Dadosa sintaxe ficará da seguinte forma:
	<br />
	```shell
	pg_dump -h *host* -p *xxxx* *nome_do_banco* > /diretorio/nome_do_arquivo
	```
	```shell
	psql -h *host* -p *xxxx* *nome_do_banco* < /diretorio/nome_do_arquivo
	```