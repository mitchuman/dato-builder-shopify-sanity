import Heading from '../Heading'
import { Image, StructuredText } from 'react-datocms'

export default function HeroGeneric({ heading, content, image }: Props) {
	return (
		<section className="section grid md:grid-cols-2 items-center gap-4">
			<div>
				<Heading className="h2" heading={heading} />
				<StructuredText data={content} />
			</div>

			{image && <Image data={image.responsiveImage} />}
		</section>
	)
}

interface Props extends Dato.Module {
	heading?: Dato.Heading[]
	content?: any
	image?: Dato.Image
}
