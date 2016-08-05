# Criando e Alterando tableas no PostgreSQL

#### Lebrando que o PostgreSQL NÃO é CASE SENSITIVE
<br />
Referenciando a chave primária da tabela tbCargo de forma implícita

```sql
CREATE TABLE tbCargo (
	idCargo SERIAL PRIMARY KEY,
	cargo VARCHAR(255) NOT NULL,
	salario NUMERIC(6, 4)
);
```

```sql
CREATE TABLE tbFuncionario (
	idFunc SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	idade INTEGER NOT NULL,
	cargo INTEGER NOT NULL REFERENCES tbCargo
);
```

OU de forma explícita

```sql
CREATE TABLE tbFuncionario (
	idFunc SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	idade INTEGER NOT NULL,
	cargo INTEGER NOT NULL,
	FOREIGN KEY cargo REFERENCES tbCargo (idCargo)
);
```

#### Alterando a tables de tbCargo
<br />
Adicionando NOT NULL à coluna salario
```sql
ALTER TABLE tbCargo ALTER COLUMN salario SET NOT NULL;
```