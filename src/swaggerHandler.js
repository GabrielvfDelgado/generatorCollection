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
    const clone = Object.assign({}, corpo);
    collection.item.push(clone);
    collection.item[item].name = arrFolders[item];
  }
}

function getIndexResource(data, tag) {
  let index;
  for (index in data.item) {
    if (tag == data.item[index].name) {
      break;
    }
  }
  return index;
}

function generatorReq(data, paths) {
  let indexResource;
  let indexItem = 0;
  for (let recurso in paths) {
    let objeto = paths[recurso];
    for (let method in objeto) {
      indexResource = getIndexResource(data, objeto[method].tags);
      const clone = Object.assign({}, item);
      data.item[indexResource].item.push(clone);
      data.item[indexResource].item[indexItem].name = recurso;
      indexItem++;
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