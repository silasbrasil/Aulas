# Configurando Usuários em MongoDB no Ubuntu

A gerência de usuário no MongoDb é baseada em regras (roles). Cada banco criado no MongoDB pode ter várias regras, portanto, cada usuário poderá manupular o banco de acordo com a regra no qual ele pertence.

Vamos iniciar o MongoDB no modo default. Primeiro crie o local de armazenamento em /data/db1 e depois inicie o MongoDB.
```sh
$ sudo service mongod stop
$ sudo mkdir -p /data/db1
$ sudo mkdir -p /log/mongod.log
$ sudo chwon -R mongodb:mongodb /data/db1
$ sudo chwon -R mongodb:mongodb /log/mongod.log
```
Configure os seguintes campos do arquivo `/etc/mongod.conf` para iniciar em /data/db1 e no modo daemon.
```js
storage:
	dbPath: /data/db1
	journal:
		enable: true

systemLog:
	destination: file
	logAppend: true
	path: /log/mongod.log

processManagement:
	fork: true
```

```sh
$ sudo mongod --config /etc/mongod.conf
```

Acesse o MongoDB
```sh
$ mongo
```

Crie um usuário administrador, pois ele será responsável por gerenciar todos os outros usuário do banco. No entanto, ele não poderá usar nenhum banco.

```js
> use admin
> db.createUser({ 
	user: "admin",
	pwd: "sua_senha_secreta",
	roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
 })
```

A regra utilizada acima é a __userAdminAnyDatabase__, ele foi aplicada ao banco __admin__. Uma lista de regras pode ser encontrada na documentação do MongoDB.<br /><br />
Com o usuário __admin__ criado, agora saia do MongoDB e edit o arquivo `/etc/mongod.config`, configure as seguinte partes.

```js
storage:
	dbPath: /data/db1
	journal:
		enable: true

net:
	port: 27017
	bindIp: [privateIP, publicIP, 127.0.0.1]

processManagement:
	fork: true

security:
	authorization: enabled
```
Essa configuração será responsável por rodar o MongoDB no modo de autorização, permitir requisições externas e fazer o mongod rodar no background.

Agora reinicie o MongoDB com as novas configurações.
```sh
$ mongod --config /etc/mognod.conf
```

Acesse o MongoDB com o modo de autenticação.
```sh
$ mongo --port 27017 -u "admin" -p "sua_senha_secreta" --autheticationDatabase "admin"
```

Autentique o usuário __admin__.
```js
> use admin
> db.auth({"admin", "sua_senha_secreta"})
```

Para criar outros usuários em algum outro banco de dados é só fazer o seguinte.
```js
> use outro_banco
> db.createUser({
	user: "outro_usuario", 
	pwd: "outra_senha_secreta",
	roles: [ role: "alguma_regra", "outro_banco" ]
})

> db.auth("outro_usuario", "outra_senha_secreta")
```

### Referências:
https://docs.mongodb.com/manual/tutorial/enable-authentication/ <br />
https://docs.mongodb.com/manual/reference/built-in-roles/