import type {
  RequestHandler,
  MockedRequest,
  restContext,
  ParsedRestRequest,
} from 'msw'

type DB = {}

export type Mask = string | RegExp

export type RequestHandlerFn = RequestHandler<
  MockedRequest,
  typeof restContext,
  ParsedRestRequest
>

export type Mock = {
  path: Mask
  mockFn: RequestHandlerFn
}

export type CallTracker = Array<{ req: MockedRequest; mockName: string }>

export type GetMock = (
  db?: DB,
  callTracker?: CallTracker,
  mockName?: string,
) => Mock

export type MockConfig = {
  name: string
  getMock: GetMock
}
