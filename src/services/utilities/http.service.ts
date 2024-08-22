import axios from 'axios';
import { Header } from '../../enums/request.enum';

export const HttpService = {
  addSkipLoadingHeader(headers?: Record<string, string>): Record<string, string> {
    if (!headers) {
      headers = {};
    }
    return { ...headers, [Header.SkipLoading]: 'true' };
  }
};

// Example usage with axios:
const headers = HttpService.addSkipLoadingHeader();
axios.get('/your-endpoint', { headers });
