// import { setupServer } from 'msw/node';

// import { getHandlers } from './handlers';
// import { getAllMocks } from './requests';

// import { DB } from '../test-utils/data/db';
// import { CallTracker } from './types';

// function seedHandlers(db: DB, callTracker: CallTracker) {
//   const mocks = getAllMocks();
//   const handlerConfigs = Object.keys(getAllMocks()).map(mockName => {
//     const getConfig = mocks[mockName];
//     return getConfig(db, callTracker, mockName);
//   });
//   const { handlers } = getHandlers(handlerConfigs);

//   return handlers;
// }

// export function getServer(db: DB, callTracker: CallTracker) {
//   const handlers = seedHandlers(db, callTracker);
//   const server = setupServer(...handlers);

//   return server;
// }

// export type Server = ReturnType<typeof getServer>;

// export function resetServer(server: Server, db: DB, callTracker: CallTracker) {
//   const handlers = seedHandlers(db, callTracker);
//   server.resetHandlers(...handlers);
// }
