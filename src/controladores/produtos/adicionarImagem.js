const knex = require('../../database/conexao');
const { uploadDeArquivos } = require('../../storage');

const adicionarImagemProduto = async (req, res) => {
    const { id } = req.params;
    const { file } = req;

    try {
        if (!file) {
            return res.status(400).json("Imagem do produto não encontrada");
        }


        const produto = await knex('produtos').where('id', id).first();
        if (!produto) {
            return res.status(404).json("Produto não encontrado");
        }


        const upload = await uploadDeArquivos(file);
        if (!upload || !upload.url) {
            return res.status(500).json("Falha ao fazer upload da imagem");
        }
        const imagemUrl = upload.url;


        await knex('produtos').where('id', id).update({ produto_imagem: imagemUrl });


        return res.status(200).json({
            mensagem: "Imagem do produto adicionada com sucesso",
            url: imagemUrl
        });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
};

module.exports = adicionarImagemProduto;
