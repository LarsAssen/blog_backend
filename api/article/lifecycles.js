module.exports = ({ env }) => ({
    async afterUpload(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'juniorassen@hotmail.com',
                from: 'juniorassen@hotmail.com',
                subject: 'Uploaded',
                text: `${result.content}`,
        });
        }
        catch (err) {
            console.log(err);
        }
    }
});