export default function Heading({ heading, className }: Props) {
	const { text, tag: Tag = 'h2' } = heading[0] || []

	if (!text) return null

	return (
		<Tag className={className}>{text}</Tag>
	)
}

interface Props {
	heading?: Dato.Heading[]
	className?: string
}
