import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
    (items, filter) => {
    return items.filter(item => item.name.toLowerCase()
        .includes(filter.toLowerCase()) || item.number
        .includes(filter))
    }
)