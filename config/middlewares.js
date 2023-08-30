module.exports = [
	"strapi::errors" ,
	"strapi::cors" ,
	"strapi::query" ,
	"strapi::body" ,
	"strapi::public" ,
	"strapi::favicon",
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:'],
					'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
					'media-src': [
						"'self'",
						'data:',
						'blob:',
						'market-assets.strapi.io',
						'res.cloudinary.com',
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
];
