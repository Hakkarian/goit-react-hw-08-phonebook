import { selectFilter } from "redux/filters/filter-selectors";

export const selectAllContacts = state => state.contacts?.contacts;

export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = (state) => {
  const contacts = selectAllContacts(state);
  const filter = selectFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase() !== normalizedFilter
      ? contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
      : console.log('NO')
  );
}