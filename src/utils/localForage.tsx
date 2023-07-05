/**
 * this default storage using (IndexedDB)
 * localForage selects backend drivers for the datastore in this order:
 * 1. IndexedDB
 * 2. WebSQL
 * 3. localStorage
 */

import localforage from "localforage";

export async function getCollections() {
  await fakeNetwork("");

  let collections = await localforage.getItem("collection");
  return collections;
}

export async function getCollectionDuplicate(id: number) {
  await fakeNetwork(`collection:${id}`);

  let collections: any = await getCollections();
  let contact = collections.find((collection: any) => collection.id === id);
  return contact ?? null;
}

export async function createCollection(dataCards: any) {
  await fakeNetwork("");

  let collection = dataCards;
  let collections: any = await getCollections();

  if (collections !== null) {
    // check duplicate data in the storage. if have same id found in the storage cannot push again to storage.
    let collectionDuplicate: any = await getCollectionDuplicate(dataCards.id);
    if (collectionDuplicate === null) {
      collections.push(collection);
      await set(collections);
      return false;
    } else {
      return true;
    }
  } else {
    await set([collection]);
    return false;
  }
}

export async function deleteCollections(id: number) {
  let collections: any = await getCollections();
  let index = collections.findIndex((collection: any) => collection.id === id);
  if (index > -1) {
    collections.splice(index, 1);
    await set(collections);
  }
}

function set(collection: any) {
  return localforage.setItem("collection", collection);
}

// fake a cache so we dont slow down stuff weve already seen
let fakeCache: any = {};
async function fakeNetwork(key: any) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
