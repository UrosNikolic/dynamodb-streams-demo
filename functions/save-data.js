const AWS = require("aws-sdk")
const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1",
    apiVersion: '2012-08-10',
})

module.exports.saveData = async (event) => {
    const body =  event.body ? JSON.parse(event.body) : {}

    const params = {
        Item: {
            ...body
        },
        TableName: process.env.demoTable,
    }

    await dynamoDB.put(params).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'success',
            },
            null,
            2
        ),
    }
}