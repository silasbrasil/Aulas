# Criando Viewa em SQl Server 2008

### Criando uma View básica

```sql
CREATE VIEW nome_da_view 
AS 
  SELECT 
    idCiente AS [Código do Cliente],
    Nome,
    Idade,
    Cidade
  FROM
    Cliente;
```
Pesquisando em uma VIEW
```sql
SELECT * FROM nome_da_view;
```
Alterando uma VIEW
```sql
ALTER VIEW nome_da_view 
AS
  SELECT
    idCiente AS [Código do Cliente],
    Nome,
    Idade,
    Cidade
  FROM
    Cliente
  WHERE
    WHERE cidade = 'São José dos Patos';
```