import { fragments, request } from '@/lib/dato'
import { gql } from 'graphql-request'
import { dev } from '@/lib/env'
import PagePreview from '@/templates/PagePreview'
import PageTemplate from '@/templates/PageTemplate'

export default async function Page({ params }: { params: { slug: string }}) {
	const data = await request<{ page: Dato.Page }>(query, {
		includeDrafts: dev,
		variables: {
			index: params.slug,
		}
	})

	return dev
		? <PagePreview query={query} initialData={data} />
		: <PageTemplate data={data} />
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
		modules {
			${fragments}
		}
		seo {
			title
			description
		}
	}
}`
