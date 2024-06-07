import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
  NATS_SERVERS: string[];
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  database: envVars.DATABASE_URL,
  natsServers: envVars.NATS_SERVERS,
};
