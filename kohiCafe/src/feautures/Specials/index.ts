import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  documentId,
} from "firebase/firestore";
import type { MenuCategory, AddOn, Item } from "../../types/Item";

// create a new Item
export const addItem = async (item: Item): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "Items"), item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};
export const addMenuCategory = async (
  menuCategory: Omit<MenuCategory, "id">
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "MenuCategories"), menuCategory);
    return docRef.id;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};
export const addAddOns = async (addOn: AddOn): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "AddOns"), addOn);
    return docRef.id;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const getItems = async (): Promise<Item[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "Items"));
    const fetchedItems: Item[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as Item[];
    return fetchedItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCategories = async (): Promise<MenuCategory[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "MenuCategories"));
    const fetchedItems: MenuCategory[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as MenuCategory[];
    return fetchedItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItemsbyCategories = async (
  categoryId: string
): Promise<Item[]> => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "Items"), where("item_category", "==", categoryId))
    );
    const fetchedItems: Item[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as Item[];
    return fetchedItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAddonsbyCategory = async (
  addOnId: string
): Promise<AddOn[]> => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "AddOns"), where(documentId(), "==", addOnId))
    );
    const fetchedItems: AddOn[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as AddOn[];
    return fetchedItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
