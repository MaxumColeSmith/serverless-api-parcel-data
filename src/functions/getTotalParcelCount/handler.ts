import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { MongoClient, ServerApiVersion } from 'mongodb';

import schema from './schema';

const mongo_username = ""
const mongo_password = ""

const getTotalParcelCount: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.rstqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri, { serverApi: ServerApiVersion.v1 })
    .catch(err => { console.log(err); });

  if (!client) {
    return;
  }

  const db = client.db("lewis_county_parcels")
  const collection = db.collection("parcel_number_locations");
  const count = await collection.countDocuments();
  await client.close();

  return formatJSONResponse({
    message: JSON.stringify(count),
    event,
  });
};

export const main = getTotalParcelCount; //middyfy(getTotalParcelCount);
