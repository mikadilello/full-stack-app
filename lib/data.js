import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join( process.cwd(), 'data' );

// fnct returns ids for all json objects in array
export function getAllIds() {
  const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);
  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });

  const filePath2 = path.join(dataDir, 'morepersons.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  return jsonObj2.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
}

// fnct returns names and ids for all json objects in array, sorted by name property
export function getSortedList() {
  const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  jsonObj.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });

  const filePath2 = path.join(dataDir, 'morepersons.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  jsonObj2.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return jsonObj2.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

// async function to get the complete data for just one person
export async function getData(idRequested) {
  // get filepath to json file
  const filePath = path.join(dataDir, 'persons.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  const objMatch = jsonObj.filter( obj => {
    return obj.id.toString() === idRequested;
  });
    // extract object value in fileted array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  return objReturned;

  // get filepath to json file
  const filePath2 = path.join(dataDir, 'morepersons.json');
  // load json file contents
  const jsonString2 = fs.readFileSync(filePath, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const objMatch2 = jsonObj2.filter( obj => {
    return obj.id.toString() === idRequested;
  });
    // extract object value in fileted array if any
  let objReturned2;
  if (objMatch2.length > 0) {
    objReturned2 = objMatch2[0];
  } else {
    objReturned2 = {};
  }
  return objReturned2;
}