'use client'

import { useQuerySubscription } from 'react-datocms'
import Page from './PageTemplate'

export default function PagePreview({ query, initialData }: Props) {
	const { data } = useQuerySubscription<{ page: Dato.Page }>({
		query,
		initialData,
		token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
		preview: true,
	})

	return (
		<Page data={data} />
	)
}

interface Props {
	query: string
	initialData?: any
}
