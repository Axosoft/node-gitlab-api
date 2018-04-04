import Request from 'request-promise';
import Humps from 'humps';
import LinkParser from 'parse-link-header';
import URLJoin from 'url-join';

function defaultRequest(
  url,
  endpoint,
  { headers, body, qs, formData, resolveWithFullResponse = false },
) {
  const params = {
    url: URLJoin(url, endpoint),
    headers,
    json: true,
  };

  if (body) params.body = Humps.decamelizeKeys(body);
  if (qs) params.qs = Humps.decamelizeKeys(qs);
  if (formData) params.formData = formData;

  params.resolveWithFullResponse = resolveWithFullResponse;

  return params;
}

class RequestHelper {
  static async get(service, endpoint, options = {}) {
    const response = await Request.get(defaultRequest(service.url, endpoint, {
      headers: service.headers,
      qs: options,
      resolveWithFullResponse: true,
    }));

    const links = LinkParser(response.headers.link);
    const page = response.headers['x-page'];
    const limit = options.maxPages ? page < options.maxPages : true;
    let more = [];

    if (page && limit && links.next) {
      more = await RequestHelper.get(service, links.next.url.replace(service.url, ''), options);

      return [...response.body, ...more];
    }

    return response.body;
  }

  static async post(service, endpoint, options = {}, form = false) {
    const body = form ? 'fromData' : 'body';

    const response = await Request.post(defaultRequest(service.url, endpoint, {
      headers: service.headers,
      [body]: options,
    }));

    return response.body;
  }

  static async put(service, endpoint, options = {}) {
    const response = await Request.put(defaultRequest(service.url, endpoint, {
      headers: service.headers,
      body: options,
    }));

    return response.body;
  }

  static async delete(service, endpoint, options = {}) {
    const response = await Request.delete(defaultRequest(service.url, endpoint, {
      headers: service.headers,
      qs: options,
    }));

    return response.body;
  }
}

export default RequestHelper;
