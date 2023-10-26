require('dotenv').config()
const aws = require('aws-sdk')
const endpoint = new aws.Endpoint('s3.us-east-005.backblazeb2.com')

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: '005d17cdceeb0db0000000001',
        secretAccessKey: 'K005C3YJ1a/3tG73WEDDL+OP6MmtIZE'
    }
})

const uploadDeArquivos = async (file) => {
    const arquivo = await s3.upload({
        Bucket: 'desafio-unidade-5',
        Key: `produtos/${file.orginalName}`,
        Body: file.buffer,
        ContentType: file.mimetype
    }).promise()

    return {
        url: arquivo.Location,
        path: arquivo.Key
    }
}
const excluirArquivo = async (path) => {
    await s3.deleteObject({
        Bucket: 'desafio-unidade-5',
        Key: path
    }).promise()
}

module.exports = {
    uploadDeArquivos,
    excluirArquivo
}