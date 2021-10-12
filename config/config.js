module.exports = ({ env }) => ({
    upload: {
        provider: "cloudinary",
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME')
        }
    }
})