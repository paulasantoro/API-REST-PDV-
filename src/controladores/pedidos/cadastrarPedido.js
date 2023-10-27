const knex = require('../../database/conexao')
//const transportador = require('../../email')
//const compiladorHtml = require('../../utils/compiladorHtml')


const cadastrarPedido = async (req, res) => {

    try {

        const { cliente_id, observacao, pedido_produtos } = req.body;

        //validar campos
        if (!cliente_id || !pedido_produtos || pedido_produtos.length === 0) {
            return res.status(400).json({ mensagem: "Campos obrigatórios" })
        }

        //verificar se o cliente esta cadastrado
        const cliente = await knex('clientes').where('id', cliente_id).first();
        if (!cliente) {
            return res.status(400).json({ mensagem: "Cliente não encontrado" })
        }

        const pedido = {
            cliente_id,
            observacao,
            valor_total: 0,
        };

        const produtos = [];
        //procurando item do pedido no estoque
        for (const item of pedido_produtos) {
            const produto = await knex('produtos').where('id', item.produto_id).first();

             //if (!produto || produto.estoque < parseInt(item.quantidade_produto)) {
            if (!produto || produto.estoque < item.quantidade_produto) {
                return res.status(400).json({ mensagem: "produto não encontrado ou estoque insuficiente!" })

            }

            produtos.push(produto)
            
            pedido.valor_total += item.quantidade_produto * produto.valor;
        
        }
        
    
        const [{id:pedidoId}] = await knex('pedidos').insert(pedido).returning('id');
        console.log(pedidoId)
        
        //inserir produtos na tabela pedidos_produtos
        for (const busca of pedido_produtos){
            await knex('pedido_produtos').insert({
                pedido_id: pedidoId,
                produto_id: busca.produto_id,
                quantidade_produto: busca.quantidade_produto,
                valor_produto: produtos.find(p => p.id === busca.produto_id).valor
            });
        }

        /* enviar e-mail
        transportador.sendMail({
            from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
            to: `${cliente.nome} <${cliente.email}>`,
            subject: 'Pedido efetuado com sucesso!',
            text: 'Seu pedido foi registrado'
        })
        */
        return res.status(201).json({ mensagem: "Pedido criado coom sucesso!"})


    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



module.exports = cadastrarPedido;