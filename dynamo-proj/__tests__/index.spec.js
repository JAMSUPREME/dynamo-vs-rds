import { index } from '../index';
import { mockClient } from 'aws-sdk-client-mock';

describe('When verifying the stuff', () => {


  beforeAll(() => {
    const ddbMock = mockClient(DynamoDBDocumentClient);
    ddbMock.on(QueryCommand).resolves({
      Items: [{ pk: 'a', sk: 'b' }],
    });
  });

  test('It should work', async () => {
    // TODO: Verify stuff works
    const mockEvent = {
      httpMethod: 'GET',
      path: '/dynamo-stuff'
    };

    await index.handler(mockEvent, {});
  });
});