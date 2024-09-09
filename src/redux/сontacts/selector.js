import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/select";

export const selectorContact = (state) => state.contacts.items
export const selectorLoading = (state) => state.contacts.loading

export const selectFilteredContacts = createSelector(
    [selectorContact, selectFilter],
    (contacts, filterValue) => {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filterValue.toLowerCase());
      });
    }
  );