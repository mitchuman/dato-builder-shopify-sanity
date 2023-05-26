import { request, fragments } from '@/lib/dato'
import { gql } from 'graphql-request'
import { dev } from '@/lib/env'
import PagePreview from '@/templates/PagePreview'
import PageTemplate from '@/templates/PageTemplate'

export default async function Index() {
	const data = await request<{ page: Dato.Page }>(query, {
		includeDrafts: dev,
	})

	return dev
		? <PagePreview query={query} initialData={data} />
		: <PageTemplate data={data} />
}

const query = gql`{
	page(filter: {slug: {eq: "index"}}) {
		title
		modules {
			${fragments}
		}
		seo {
			title
			description
		}
	}
}`
