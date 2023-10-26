const knex = require('../../database/conexao')


const cadastrarPedido = async (req, res) => {
	
    try {

        const { cliente_id, observacao, pedido_produtos } = req.body;

        //validar campos
        if(!cliente_id || !pedido_produtos || pedido_produtos.length ===  0){
            return res.status(400).json({ mensagem: "Campos obrigatórios"})
        }

        //verificar se o cliente esta cadastrado
        const cliente = await knex('clientes').where('id', cliente_id).first();
        if (!cliente){
            return res.status(400).json({ mensagem: "Cliente não encontrado"})
        }

        const pedido = {
            cliente_id,
            observacao,
            valor_total: 0,
        };
        
        for (const item of pedido_produtos){
            const produto = await knex('produtos').where('id', item.produto_id).first();
            

            if (!produto || produto.estoque < parseInt(item.quantidade_produto)){
                return res.status(400).json({ mensagem: "produto não encontrado ou estoque insuficiente!"})

            }
           
            const valorProduto = parseInt(item.quantidade_produto * parseFloat(produto.valor));
            pedido.valor_total += valorProduto;
        }
            
        const [pedidoId] = await knex('pedidos').insert(pedido).returning('id');


        //inserir produtos na tabela pedidos_produtos
        const pedidosProdutos = pedido_produtos.map((item) => ({
      
            pedido_id: pedidoId[0],
            produto_id: item.produto_id,
            quantidade_produto: parseInt(item.quantidade_produto),
            valor_produto: item.valor
        }));
        

        await knex('pedido_produtos').insert(pedidosProdutos);

        return res.status(201).json({ mensagem: "Pedido criado coom sucesso!"})

    }catch(error){
        return res.status(500).json(error)
    }
}



module.exports = cadastrarPedido;