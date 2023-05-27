'use client'

import { BuilderComponent, useIsPreviewing } from '@builder.io/react'
import Error from 'next/error'

export function RenderBuilderContent({ content }: Props) {
	const isPreviewing = useIsPreviewing()

	if (content || isPreviewing) {
		return <BuilderComponent content={content} model="page" />
	}

	return <Error statusCode={404} />
}

interface Props {
	content: any
}
