import 'dotenv/config';

interface IEnvironmentConfig {
  postgresUsername: string;
  postgresPassword: string;
  postgresDB: string;
}

export const environmentConfig: IEnvironmentConfig = {
  postgresUsername: process.env.POSTGRES_USERNAME,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDB: process.env.POSTGRES_DB,
};
