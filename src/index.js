'use strict'


const testDynamo = async ()=>{
    const AWS = require('aws-sdk')
  const   dynDb = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" })
  const data = await dynDb.query({}).promise()

  return data.Items
}
module.exports= testDynamo