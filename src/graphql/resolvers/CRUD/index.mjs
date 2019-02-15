import AWS from 'aws-sdk'
import buildUpdateParams from './buildUpdateParams/index.mjs'

class documentClient {
  constructor (options) {
    /*
    options[httpOptions] = {
      agent: new http.Agent({ keepAlive: true })
    }
    */
    AWS.config.update({
      region: 'eu-west-2'
    })
    this.documentClient = new AWS.DynamoDB.DocumentClient(options)
  }

  async create ({ collection, item }) {
    const params = {
      TableName: collection,
      Item: item
    }
    // console.log(params)
    await this.documentClient.put(params, (error, data) => {
      if (error) {
        console.log(`Error: ${error}`)
        return false
      } else {
        // console.log(`put response: ${data}`)
        return data
      }
    })
  }
  async read ({ collection, key }) {
    const params = {
      TableName: collection,
      Key: key
    }

    return this.documentClient.get(params).promise()

    /*, (error, data) => {
      if (error) {
        console.log(error)
        return false
      } else {
        console.log(data)
        return data.Item
      }
    })
    */
  }

  async update ({ collection, key, item }) {
    const {
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues
    } = buildUpdateParams(item)

    const params = {
      TableName: collection,
      Key: key,
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      ReturnValues: 'UPDATED_NEW'
    }
    // console.log(params)
    await this.documentClient.update(params, (error, data) => {
      if (error) {
        console.log(error)
        return false
      } else {
        return data.Item
      }
    })
  }
  async delete ({ collection, key }) {
    const params = {
      TableName: collection,
      Key: key
    }
    // console.log(params)
    await this.documentClient.delete(params, (error, data) => {
      if (error) {
        console.log(error)
        return false
      } else {
        return data.Item
      }
    })
  }
}

export default documentClient
