import type { DefineOgImageInput, ExtractComponentProps, OgImageOptions, OgImagePageScreenshotOptions } from '../../types'
import type { OgImageComponents } from '#nuxt-og-image/components'

export function defineOgImage(_options: DefineOgImageInput = {}) {}
// eslint-disable-next-line unused-imports/no-unused-vars
export function defineOgImageComponent<T extends keyof OgImageComponents>(component: T, props: Partial<ExtractComponentProps<OgImageComponents[T]>> = {}, options: OgImageOptions = {}) {}
// eslint-disable-next-line unused-imports/no-unused-vars
export function defineOgImageScreenshot(options: OgImagePageScreenshotOptions = {}) {}
