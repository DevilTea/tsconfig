import { readFile } from 'node:fs/promises'

export const platform = process.platform
export const readText = (path: string): Promise<string> => readFile(path, 'utf8')
