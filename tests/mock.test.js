'use strict'
const AWS = require('aws-sdk-mock')
const testDynamo = require('../src/')

describe('simple test', ()=>{
    beforeAll( ()=>{
		AWS.mock('DynamoDB.DocumentClient', 'query', (params, callback) => {
			callback(null, {
				Items: [{fakeResponse:true}]

			})
		})

    })
    test('dynamo call', async ()=>{
			const rsp = await testDynamo()
			console.log(rsp)

    })

})