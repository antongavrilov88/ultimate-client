import { AxiosHTTPClient } from './AxiosHTTPClient';
import { LocalStorageClient } from './LocalStorageClient';
import { baseInstance } from './axios';

const baseHTTPClient = new AxiosHTTPClient(baseInstance);
const baseStorageClient = new LocalStorageClient();

export { baseHTTPClient, baseStorageClient };
