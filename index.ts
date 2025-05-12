import mysql, { Connection } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import cors from '@fastify/cors';

const app = fastify();
app.register(cors);

// Função para criar uma conexão com o banco de dados
async function createDatabaseConnection(): Promise<Connection> {
    return await mysql.createConnection({
        host: 'localhost',
        user: '',
        password: '',
        database: 'Sapatos'
    });
}

// Rota de test
app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando");
});

// Rota para buscar os dados do estoque de sapatos
app.get('/estoque_sapatos', async (request: FastifyRequest, reply: FastifyReply) => {
    let conn: Connection | null = null;
    try {
        conn = await createDatabaseConnection();
        const [rows] = await conn.query("SELECT * FROM estoque_sapatos");
        reply.status(200).send(rows);
    } catch (erro: any) {
        console.error("Erro ao buscar estoque:", erro);
        
        if (erro.code === 'ECONNREFUSED') {
            reply.status(400).send({ mensagem: "ERRO: LIGUE O LARAGAO => Conexão Recusada" });
        } else if (erro.code === 'ER_BAD_DB_ERROR') {
            reply.status(400).send({ mensagem: "ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO" });
        } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            reply.status(400).send({ mensagem: "ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO" });
        } else if (erro.code === 'ER_NO_SUCH_TABLE') {
            reply.status(400).send({ mensagem: "ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY" });
        } else if (erro.code === 'ER_PARSE_ERROR') {
            reply.status(400).send({ mensagem: "ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS" });
        } else {
            reply.status(400).send({ mensagem: "ERRO: NÃO IDENTIFICADO" });
        }
    } finally {
        if (conn) {
            await conn.end(); // Fechar a conexão após a consulta
        }
    }
});

// Inicializando o servidor
app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error("Erro ao iniciar servidor:", err);
        process.exit(1);
    }
    console.log(`Servidor ouvindo em ${address}`);
});