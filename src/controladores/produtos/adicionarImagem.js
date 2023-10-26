const knex = require('../../database/conexao');
const { uploadDeArquivos } = require('../../storage');

const adicionarImagemProduto = async (req, res) => {
    const { id } = req.params;
    const { file } = req;

    if (!file) {
        return res.status(400).json("Imagem do produto não encontrada");
    }

    try {
        const upload = await uploadDeArquivos(file);
        const imagemUrl = upload.url;

        await knex('produtos')
            .where('id', id)
            .update({ produto_imagem: imagemUrl });

        return res.status(200).json("Imagem do produto adicionada com sucesso");

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = adicionarImagemProduto;