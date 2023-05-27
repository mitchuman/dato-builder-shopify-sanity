import dynamic from 'next/dynamic'
import { dev } from '@/lib/env'

const HeroGeneric = dynamic(() => import('@/components/Modules/HeroGeneric'))
const UVPList = dynamic(() => import('@/components/Modules/UVPList'))

export default function PageTemplate({ data }: Props) {
	if (!data) return null

	return <>
		{data.page.modules?.map((module, i) => {
			const props = {
				...module,
			}

			switch(module._modelApiKey) {
				case 'hero_generic': return <HeroGeneric {...props} key={i} />
				case 'uvp_list': return <UVPList {...props} key={i} />

				default:
					return <pre hidden={!dev} key={i}>_modelApiKey: {module._modelApiKey}</pre>
			}
		})}
	</>
}

interface Props {
	data?: {
		page: Dato.Page
	}
}
