declare global {
	namespace Dato {
		interface Page {
			title: string
			seo: {
				title: string
				description: string
			}
			slug: string
		}
	}
}

export {}
