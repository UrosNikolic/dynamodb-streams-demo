
module.exports.ddbStreamReceiver = async (event) => {
    console.log('STREAMS ', JSON.stringify(event['Records']))
    const records = event['Records'][0].dynamodb['NewImage']
    console.log('\nSTREAM RECORDS: ', JSON.stringify(records))
}