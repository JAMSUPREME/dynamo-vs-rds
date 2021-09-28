// Do something at some point
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const handler = async function handler(event, context) {
  // I think the client values should get auto-filled?
  const client = new DynamoDBClient({});
  
  const command = new PutItemCommand({
    TableName: 'Users',
    Item: {
      "id": "user1",
      "firstName": "Me"
    }
  });
  const response = await client.send(command);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Worked"
    })
  };
};

export { handler };