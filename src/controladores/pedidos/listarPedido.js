const knex = require('../../database/conexao')


const  listarPedido = async (req, res) => {
	const { cliente_id} = req.query;

    try{

        if(cliente_id){
         
        const pedidos = await knex('pedidos')
           .where('cliente_id', cliente_id)
           .select('id','valor_total','observacao','cliente_id');


        pedidosComProdutos = [];

        for (const pedido of pedidos){
            const produtos1 = await knex('pedido_produtos')
                 .where('pedido_id', pedido.id)
                 .select('id','quantidade_produto','valor_produto','produto_id');
        
            pedidosComProdutos.push({
            pedido,
            pedido_produtos:produtos1,
           });
        
        }

        res.status(200).json(pedidosComProdutos)

        }else{
            const todosProdutos = await knex('pedido_produtos')
              .select('id','quantidade_produto','valor_produto','produto_id');

              res.status(200).json(todosProdutos)

        }

    }catch(error){

           res.status(500).json({ mensagem: "Erro interno do servidor"})
    }
};
   


module.exports =  listarPedido ;