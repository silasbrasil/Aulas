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


*Referências*
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-centos-7
