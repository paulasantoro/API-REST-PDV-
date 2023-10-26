const knex = require('../../database/conexao')


const  listarPedido = async (req, res) => {
	const { cliente_id} = req.query;

    try{

        let query = knex.select(
            'pedidos.id',
            'pedidos.valor_total',
            'pedidos.observacao',
            'pedidos.cliente_id'
        )

        .from('pedidos')
        .leftJoin('pedido_produtos','pedidos.id', 'pedido_produtos.pedido_id');

        if(cliente_id){
            query= query.where('pedidos.cliente_id', cliente_id);
        }

        const pedidos = await query;

        const response = pedidos.map((pedido) => {
            const pedido_produtos = pedidos
               .filter((p) => p.pedido_id === pedido.id)
               .map((p) => ({
                   id: p.id,
                   quantidade_produto: p.quantidade_produto,
                   valor_produto: p.valor_produto,
                   pedido_id: p.pedido_id,
                   produto_id: p.produto_id
                
               }));

               return { pedido, pedido_produtos };
        });

        res.json(response)

    }catch(error){

           res.status(500).json({ mensagem: "Erro interno do servidor"})
    }
};
   


module.exports =  listarPedido ;