import { modelNewColletion, item, corpo } from './models.js';


function generatorFolder(collection, paths) {
  const arrFolders = [];
  for (let recurso in paths) {
    let path = paths[recurso];
    for (let recurso in path) {
      let tag = path[recurso].tags;
      try {
        if (tag[0]) {

          if (arrFolders.indexOf(tag[0]) == -1) {
            arrFolders.push(tag[0]);
          }
        }
      } catch (e) {
        throw new UserException(`Esta faltando a tag no swagger`);
      }
    }
  }

  for (let item in arrFolders) {
    let clone = JSON.parse(JSON.stringify(corpo));
    collection.item.push(clone);
    collection.item[item].name = arrFolders[item];
  }
}

function getIndexResource(collection, tag) {
  let index;
  for (index in collection.item) {
    if (tag == collection.item[index].name) {
      break;
    }
  }
  return index;
}

function getFinalIndex(arrControle, tag) {
  for (let index in arrControle) {
    if (tag == arrControle[index].tag) {
      return index;
    }
  }
  return false;
}

function getQuery(parameters) {
  let query = [];
  for (let index in parameters) {
    if (parameters[index].in === "query") {
      query.push({
        key: parameters[index].name,
        value: 'insira aqui'
      });
    }
  }
  if (query[0] == null) {
    return 0;
  } else {
    return query;
  }
}

function getHeader(parameters) {
  let header = [{
    key: "Content-Type",
    value: "application/json",
    type: "text"
  }];
  for (let index in parameters) {
    if (parameters[index].in === "header") {
      header.push({
        key: parameters[index].name,
        value: "insira aqui",
        type: "text"
      });
    }
  }
  return header;
}

function addQuery(collection, parameters, indexResource, indexItem) {
  let querys = getQuery(parameters);
  if (!(querys == 0)) {
    collection.item[indexResource].item[indexItem].request.url.query = querys;
  }
}


function addHeader(collection, parameters, indexResource, indexItem) {
  let headers = getHeader(parameters);
  collection.item[indexResource].item[indexItem].request.header = headers;
}

function addBody(collection, method, indexResource, indexItem) {
  if (method == 'put' || method == 'post') {
    collection.item[indexResource].item[indexItem].request.body = {
      "mode": "raw",
      "raw": "{\r\n    \r\n}"
    };
  }
}


function generatorReq(collection, paths) {
  let indexResource;
  let indexItem = 0;
  let arrControle = [];
  let indexArr;
  for (let recurso in paths) {
    let objeto = paths[recurso];
    for (let method in objeto) {
      let tag = objeto[method].tags[0];

      if (getFinalIndex(arrControle, tag) == false) {
        arrControle.push(
          {
            tag: tag,
            finalIndex: 0
          }
        );
        indexArr = getFinalIndex(arrControle, tag);
        indexItem = arrControle[indexArr].finalIndex;
      } else {
        indexArr = getFinalIndex(arrControle, tag);
        indexItem = arrControle[indexArr].finalIndex;

      }
      indexResource = getIndexResource(collection, objeto[method].tags);
      let copia = JSON.parse(JSON.stringify(item));
      collection.item[indexResource].item.push(copia);
      collection.item[indexResource].item[indexItem].name = recurso;
      collection.item[indexResource].item[indexItem].request.method = method;
      collection.item[indexResource].item[indexItem].request.url.raw = "{{url}}" + recurso.replace(/[{]+/g, ':').replace(/[}]+/g, '');
      collection.item[indexResource].item[indexItem].request.url.host[0] = "{{url}}" + recurso.replace(/[{]+/g, ':').replace(/[}]+/g, '');

      addQuery(collection, objeto[method].parameters, indexResource, indexItem);
      addHeader(collection, objeto[method].parameters, indexResource, indexItem);
      addBody(collection, method, indexResource, indexItem);
      arrControle[indexArr].finalIndex += 1;

      // addRequest();
      // addBody();
    }
  }
}


export function collectionCreation(swagger) {
  modelNewColletion.info.name = swagger.info.title.replace('.', ' ');
  const paths = swagger.paths;
  generatorFolder(modelNewColletion, paths);
  generatorReq(modelNewColletion, paths);
  return modelNewColletion;
};