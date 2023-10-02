import aws from 'aws-sdk';
import { randomUUID } from 'crypto';

const s3 = new aws.S3({
  region: process.env.AWS_REGION_NAME as string,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
});

const singleFileUpload = async (base64: string): Promise<string> => {
  const base64Data = Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  );

  const type = base64.split(';')[0].split('/')[1];

  const Key = `contacts/${
    new Date().getTime().toString() + randomUUID()
  }.${type}`;

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: Key,
    Body: base64Data,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
  };

  const result = await s3.upload(uploadParams).promise();
  return result.Key;
};

const getFileUrl = async (key: string): Promise<string> => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  try {
    const signedRequest = await s3.getSignedUrl('getObject', params);

    return signedRequest;
  } catch (error) {
    throw error;
  }
};

export { s3, singleFileUpload, getFileUrl };
