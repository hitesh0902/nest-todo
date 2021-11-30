import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { environmentConfig } from './environment';

export const TypeORMConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: environmentConfig.postgresUsername,
  password: environmentConfig.postgresPassword,
  database: environmentConfig.postgresDB,
  entities: ['dist/src/entities/*.entity.js'],
  // todo: remove later
  synchronize: true,
  autoLoadEntities: true,
});

export const TypeORMConnectionConfig = TypeOrmModule.forRootAsync({
  useFactory: async () =>
    Object.assign(await getConnectionOptions(), {
      autoLoadEntities: true,
    }),
});
