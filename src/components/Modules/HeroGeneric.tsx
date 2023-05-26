import { Image, StructuredText } from 'react-datocms'

export default function HeroGeneric({ content, image }: Props) {
	return (
		<section className="grid md:grid-cols-2 items-center gap-4">
			<div>
				<StructuredText data={content} />
			</div>

			{image && <Image data={image.responsiveImage} />}
		</section>
	)
}

interface Props extends Dato.Module {
	content?: any
	image?: Dato.Image
}
