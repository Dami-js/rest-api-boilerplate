import './loadenv';

export const CWD = process.cwd();
export const PORT = process.env.PORT || '';
export const ROOT_PATH = `${CWD}/${process.env.ROOT_PATH}`;
export const API_URL = process.env.API_URL || '';
export const MONGODB_URI = process.env.MONGODB_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';

export const POSTGRES = 'postgres';
export const DB_ONE_HOST = 'localhost';
export const DB_ONE_PORT = 5432;
export const DB_ONE_USERNAME = 'postgres';
export const DB_ONE_PASSWORD = '123456';
export const DB_ONE_NAME = 'tododb';
