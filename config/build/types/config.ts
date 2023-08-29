export type BuildMode = 'development' | 'production'
export interface BuildPath {
    entry: string
    build: string
    html: string
    isDev: boolean
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPath
    isDev: boolean
}