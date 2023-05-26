import { request } from '@/lib/dato'
import { gql } from 'graphql-request'
import { dev } from '@/lib/env'
import PagePreview from '@/components/PagePreview'
import PageTemplate from '@/components/PageTemplate'

export default async function Page({ params }: { params: { slug: string }}) {
	const data = await request<{ page: Dato.Page }>(query, {
		includeDrafts: dev,
		variables: {
			index: params.slug,
		}
	})

	if (dev) return (
		<PagePreview query={query} initialData={data} />
	)

	return (
		<PageTemplate data={data} />
	)
}

export async function generateStaticParams() {
	const { allPages } = await request<{ allPages: Dato.Page[] }>(gql`{
		allPages(filter: { slug: { neq: "index" } }) {
			slug
		}
	}`, {
		includeDrafts: dev,
	})

	return allPages.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

const query = gql`query Page($index: String){
	page(filter: {slug: {eq: $index}}) {
		title
		seo {
			title
			description
		}
	}
}`
