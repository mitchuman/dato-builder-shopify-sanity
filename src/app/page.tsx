import { request } from '@/lib/dato'
import { gql } from 'graphql-request'
import { dev } from '@/lib/env'
import PagePreview from '@/components/PagePreview'
import PageTemplate from '@/components/PageTemplate'

export default async function Index() {
	const data = await request<{ page: Dato.Page }>(query, {
		includeDrafts: dev,
	})

	if (dev) return (
		<PagePreview query={query} initialData={data} />
	)

	return (
		<PageTemplate data={data} />
	)
}

const query = gql`{
	page(filter: {slug: {eq: "index"}}) {
		title
		seo {
			title
			description
		}
	}
}`
