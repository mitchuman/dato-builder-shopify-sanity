import { StructuredText } from 'react-datocms/structured-text'

export default function UVPList({ heading, uvpItems }: Props) {
	return (
		<section className="section">
			<header className="text-center">
				<h2 className="h2">{heading}</h2>
			</header>

			<ul className="grid md:grid-cols-3 gap-4">
				{uvpItems?.map((item, i) => (
					<li key={i}>
						<h3 className="h3">{item.title}</h3>
						<StructuredText data={item.content} />
					</li>
				))}
			</ul>
		</section>
	)
}

interface Props extends Dato.Module {
	heading?: string
	uvpItems?: {
		title: string
		content: any
		image: Dato.Image
	}[]
}
