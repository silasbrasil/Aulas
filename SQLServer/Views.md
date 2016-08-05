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
Na criação de VIEWS não é recomendado a utilização dos seguintes SELECTs, pois as VIEW não são atualizadas caso um novo dado seja inserido na tabela.
<br />
#### Boas práticas na criação de VIEWs 
<br />
* Crie VIEWs específicas e que seja de grande utilidade;
* Se possível utilize índices, pois eles dão um grande aumento na performace das pesquisa;

**Ainda preciso rever esse tópico**

