# Configurando Usuários em MongoDB no Ubuntu

A gerência de usuário no MongoDb é baseada em regras (roles). Cada banco criado no MongoDB pode ter várias regras, portanto, cada usuário poderá manupular o banco de acordo com a regra no qual ele pertence.

Vamos iniciar o MongoDB no modo default.

Porta padrão: 27017
Local de armazenamento: /data/db1
```sh
$ mongod --port 27017 --dbpath /data/db1
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

A regra utilizada acima é a _userAdminAnyDatabase_, ele foi aplicada ao banco _admin_. Uma lista de regras podem ser encontradas na documentação do MongoDB.<br />
Usuário admin criado, agora saia do MongoDb e edit o arquivo `/etc/mongod.config`, configure as seguinte partes. Essa configuração será responsável por rodar o MongoDB no modo de autorização, permitir requisições externas e fazer o mongod rodar no background.

```json
storage:
	dbPath: /data/db1
	journal:
		enable: true

net:
	port: 27017
	bindIp: [_privateIP_, _publicIP_, 127.0.0.1]

processManagement:
	fork: true

security:
	authorization: enabled
```

Agora reinicie o MongoDB com as novas configurações
```sh
$ mongod --config /etc/mognod.config
```

Acesse o MongoDB com o modo de autenticação
```sh
$ mongo --port 27017 -u "admin" -p "sua_senha_secreta" --autheticationDatabase "admin"
```

Autentique o usuário admin
```js
> use admin
> db.auth({"admin", "sua_senha_secreta"})
```

Para criar outros usuário em algum outro banco de dados é só fazer o seguinte:
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
https://docs.mongodb.com/manual/tutorial/enable-authentication/
https://docs.mongodb.com/manual/reference/built-in-roles/