export default function PageTemplate({ data }: Props) {
	if (!data) return null

	return (
		<h1>{data.page.title}</h1>
	)
}

interface Props {
	data?: {
		page: Dato.Page
	}
}
