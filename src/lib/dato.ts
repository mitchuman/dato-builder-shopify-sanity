import { GraphQLClient, gql } from 'graphql-request'
import type { RequestConfig } from 'graphql-request/build/esm/types'

export function request<T>(
	query: string,
	{ variables, includeDrafts, excludeInvalid }: {
		variables?: any
		includeDrafts?: boolean
		excludeInvalid?: boolean
	} = {},
): Promise<T> {
	const headers: RequestConfig['headers'] = {
		authorization: `Bearer ${ process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN }`,
	}

	if (includeDrafts) {
		headers['X-Include-Drafts'] = 'true'
	}

	if (excludeInvalid) {
		headers['X-Exclude-Invalid'] = 'true'
	}

	const client = new GraphQLClient('https://graphql.datocms.com', { headers })

	return client.request(query, variables)
}

// fragments

export const fragments = gql`
	...on HeroGenericRecord {
		_modelApiKey
		content {
			blocks
			links
			value
		}
		image {
			responsiveImage(imgixParams: { auto: format }) {
				sizes src width height alt title base64
			}
		}
	}
`
