import {handler} from '../index';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { mockClient } from 'aws-sdk-client-mock';

describe('When verifying the stuff', () => {


  beforeAll(() => {
    const ddbMock = mockClient(DynamoDBClient);
    // ddbMock.on(PutItemCommand).resolves({});
    ddbMock.onAnyCommand().resolves({});
  });

  test('It should work', async () => {
    // TODO: Verify stuff works
    const mockEvent = {
      httpMethod: 'GET',
      path: '/dynamo-stuff'
    };

    await handler(mockEvent, {});
  });
});