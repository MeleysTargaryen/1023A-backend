📌 Tema do Projeto
-
O Maison Evangeline é um sistema de gerenciamento de estoque para uma loja de sapatos de luxo, desenvolvido para facilitar a busca e visualização de produtos. O tema foi escolhido para combinar um design elegante com funcionalidades práticas, permitindo que usuários encontrem sapatos por nome e tamanho de forma rápida e intuitiva.

⚙️ Funcionalidades Implementadas
-
1. Página de Estoque (Estoque.html)
Galeria de produtos com imagens e descrições.
Design responsivo que se adapta a dispositivos 
Vídeo de apresentação para uma experiência imersiva.

2. Sistema de Busca (index.html)
   -
Filtros avançados por nome e tamanho do sapato.
Resultados em tabela com detalhes como marca e tamanho.
Feedback visual (mensagens de sucesso/erro).

4. Backend em Fastify (index.ts)
   -
API RESTful com endpoints para consulta.
Conexão com MySQL para armazenamento dos dados.
Tratamento de erros detalhado para auxiliar no desenvolvimento.

🚀 Como Executar o Projeto Localmente
-
Pré-requisitos
Node.js 
MySQL (Laragon para gestão do banco)
Git (opcional, para clonar o repositório)

comandos do terminal 
-
```
npm install fastify
  node index.ts
```

Código MySql
-
```CREATE DATABASE Sapatos;
USE Sapatos;

CREATE TABLE estoque_sapatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  marca VARCHAR(100),
  tamanho INT,
  preco DECIMAL(10, 2),
  descricao TEXT
);

-- Inserir dados de exemplo
INSERT INTO estoque_sapatos (nome, marca, tamanho, preco, descricao) VALUES
('Salto Raysa', 'Evangeline', 36, 5000.00, 'Salto Alto 15cm'),
('Salto Amélia', 'Evangeline', 38, 1450.00, 'Salto Alto 8cm');
```
Fluxograma
-
![Fluxo grama](https://github.com/user-attachments/assets/2bf4a6be-6669-4dce-83bc-1f89b75733be)
