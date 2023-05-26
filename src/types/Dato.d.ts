import type { ResponsiveImageType } from 'react-datocms/image'

declare global {
	namespace Dato {
		interface Page {
			title: string
			modules?: Module[]
			seo: {
				title: string
				description: string
			}
			slug: string
		}

		interface Image {
			responsiveImage: ResponsiveImageType
		}

		interface Module extends Record<string, any> {
			_modelApiKey: string
			id: string
		}
	}
}

export {}
