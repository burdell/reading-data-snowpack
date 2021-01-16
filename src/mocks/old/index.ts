// import { setupWorker } from 'msw'

// import { getHandlers } from './handlers'
// import { getAllMocks } from './requests'
// import type { Mock } from './types'

// function getMocks() {
//   const allMocks = getAllMocks()
//   const mocks: Mock[] = []
//   // const mockRequests = (process.env.MOCK_REQUESTS || '').split(',')
//   // mockRequests.forEach((mockName) => {
//   //   if (!mockName) return

//   //   const mockFn = allMocks[mockName]
//   //   if (mockFn) {
//   //     mocks.push(mockFn())
//   //   } else {
//   //     // eslint-disable-next-line no-console
//   //     console.log(
//   //       `%c[Mocking] No mock found for ${mockName}`,
//   //       'color:orange;font-weight:bold;',
//   //     )
//   //   }
//   // })

//   Object.values(allMocks).forEach((mockFn) => {
//     if (mockFn) {
//       mocks.push(mockFn())
//     } else {
//       // eslint-disable-next-line no-console
//       console.log(
//         `%c[Mocking] No mock found for`,
//         'color:orange;font-weight:bold;',
//       )
//     }
//   })

//   return mocks
// }

// function initMocks() {
//   const mocks = getMocks()
//   const { paths, handlers } = getHandlers(mocks)

//   if (!handlers.length) {
//     console.log(`%c[Mocking] No routes mocked`, 'color:green;font-weight:bold;')
//     return
//   }

//   const worker = setupWorker(...handlers)

//   console.log(
//     `%c[Mocking] Mocking the following routes: ${paths.map((p) => `\n\t${p}`)}`,
//     'color:green;font-weight:bold;',
//   )
//   worker.start()
// }

// initMocks()
