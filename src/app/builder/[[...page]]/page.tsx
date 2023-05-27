import { builder } from '@builder.io/react'
import Head from 'next/head'
import { RenderBuilderContent } from '@/components/Builder'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string)

export default async function Page({ params }: { params: { page: string[] } }) {
	const content = await builder
		// Get the page content from Builder with the specified options
		.get('page', {
			userAttributes: {
				// Use the page path specified in the URL to fetch the content
				urlPath: '/' + (params?.page?.join('/') || ''),
			},
			// Set prerender to false to prevent infinite rendering loops
			prerender: false,
		})
		// Convert the result to a promise
		.toPromise()

	return <>
		<Head>
			<title>{content?.data.title}</title>
		</Head>
		<RenderBuilderContent content={content} />
	</>
}
