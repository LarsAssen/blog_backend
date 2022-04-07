module.exports = ({ env }) => ({
    upload: {
        provider: "cloudinary",
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME')
        }
    },
    email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'juniorassen@hotmail.com',
            defaultReplyTo: 'juniorassen@hotmail.com',
            testAddress: 'juniorassen@hotmail.com',
          },
        },
      },
})