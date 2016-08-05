# Instalando e Configurando PostgreSQL no CentOS 7

### Instalando PostgreSQL

```sh
$ sudo yum update
$ sudo yum install postgresql-server
```

Devido algumas políticas da família Red Hat o postgreSQL não inicia automaticamente. Para realizar a instalação completa ainda é necessário os seguinte passos:

```sh
$ sudo postgresql-setup initdb
$ sudo systemctl enable postgresql.service
$ sudo systemctl start postgresql
```
Para acessar o banco de dados você deve digitar o seguinte comando:
```sh
$ sudo -i -u postgres
```
Ao acessar o **-bash4.2$** digite:
```sh
-bash4.2$ psql
```

Crie um usuário com os devidos privilégios e saia do servidor postgresql.
```sql
CREATE USER user_name SUPERUSER;
\q
```
Agora você irá acessa o banco de dados postgres com o novo usuário
```sh
sudo -i -u user_name 	// Altera o usuário para acesso
psql -d postgres 		// Acesso o banco postgres com a conta do user_name acima
```
Para ver com qual usuário você está logado digite `\c` e você uma mensagem do seguinte tipo
```sh
You are connected to database "postgres" as user "user_name"
```

**Referências**<br />
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-centos-7