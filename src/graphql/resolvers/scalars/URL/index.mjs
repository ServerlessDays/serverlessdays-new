import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import isAbsoluteUrl from 'is-url-superb'
import __isRelativeUrl from 'is-relative-url'

const _isRelativeUrl = url =>
  url[0] === '/' && url[1] !== '/' && __isRelativeUrl(url)

const isRelativeUrl = url =>
  _isRelativeUrl(url) && isAbsoluteUrl(`https://foo.com${url}`)
const isUrl = url =>
  _isRelativeUrl(url)
    ? isAbsoluteUrl(`https://foo.com${url}`)
    : isAbsoluteUrl(url)

const validateUrl = url => {
  if (!isUrl(url)) {
    throw new TypeError(`Error: ${url} is not a valid url`)
  }
  return url
}

const validateRelativeUrl = url => {
  if (!isRelativeUrl(url)) {
    throw new TypeError(`Error: ${url} is not a valid url`)
  }
  return url
}

const validateAbsoluteUrl = url => {
  if (!isAbsoluteUrl(url)) {
    throw new TypeError(`Error: ${url} is not a valid url`)
  }
  return url
}

export const URL = new GraphQLScalarType({
  name: 'Url',
  description:
    'A valid absolute (starting with either a valid protocol or a leading www) or relative (with a leading slash) URL string',
  serialize: validateUrl,
  parseValue: validateUrl,
  parseLiteral (ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(
        `Query error: Can only parse strings to urls but got a: ${ast.kind}`
      )
    }

    if (!isUrl(ast.value)) {
      throw new TypeError('Query error: Invalid url')
    }
    return ast.value
  }
})

export const RelativeURL = new GraphQLScalarType({
  name: 'RelativeUrl',
  description: 'A valid relative URL string with a leading slash (/)',
  serialize: validateRelativeUrl,
  parseValue: validateRelativeUrl,
  parseLiteral (ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(
        `Query error: Can only parse strings to urls but got a: ${ast.kind}`
      )
    }

    if (!isRelativeUrl(ast.value)) {
      throw new TypeError('Query error: Invalid url')
    }
    return ast.value
  }
})

export const AbsoluteURL = new GraphQLScalarType({
  name: 'AbsoluteUrl',
  description:
    'A valid absolute URL string starting with either a valid protocol or a leading www',
  serialize: validateAbsoluteUrl,
  parseValue: validateAbsoluteUrl,
  parseLiteral (ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(
        `Query error: Can only parse strings to urls but got a: ${ast.kind}`
      )
    }

    if (!isAbsoluteUrl(ast.value)) {
      throw new TypeError('Query error: Invalid url')
    }
    return ast.value
  }
})
