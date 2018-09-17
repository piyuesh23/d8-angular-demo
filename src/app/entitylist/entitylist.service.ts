import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Entity } from './entity';

@Injectable()
export class EntitylistService{
  private baseUrl: string = 'https://training.dev/api';

  constructor(private http : Http){
  }

  getAll(currentUrl): Observable<Entity[]>{
    let slug = '';
    switch (currentUrl) {
      case '/pages':
        slug = 'node/page';
        break;
      case '/activities':
        slug = 'node/activities';
        break;
    }

    let entity$ = this.http
      .get(`${this.baseUrl}/` + slug + `/?_format=api_json`, {headers: this.getHeaders()})
      .map(mapEntities)
      .catch(handleError);
      return entity$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapEntities(response:Response): Entity[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().data.map(toEntity)
}

function toEntity(r:any): Entity{
  let entity = <Entity>({
    id: r.id,
    title: r.attributes.title,
    created: r.attributes.created,
    type: r.type
  });
  console.log('Parsed entity:', entity);
  return entity;
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
