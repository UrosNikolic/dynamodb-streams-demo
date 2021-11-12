const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports.ddbStreamReceiver = async (event) => {



    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Demo',
            },
            null,
            2
        ),
    }
}