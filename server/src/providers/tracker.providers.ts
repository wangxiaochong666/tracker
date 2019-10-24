import { Connection, Repository } from 'typeorm';
import { Tracker } from '../entities/tracker.entity';

export const photoProviders = [
  {
    provide: 'PhotoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Tracker),
    inject: ['DbConnectionToken'],
  },
];