module.exports = ({ env }) => ({
    upload: {
      provider: 'huaweicloud-obs',
      providerOptions: {
        accessKeyId: env('HUAWEICLOUD_ACCESS_KEY_ID'),
        secretAccessKey: env('HUAWEICLOUD_ACCESS_SECRET'),
        // region: env('AWS_REGION'),
        params: {
          bucket: env('OBS_BUCKET_NAME'),
        },
      },
    },
  });
   