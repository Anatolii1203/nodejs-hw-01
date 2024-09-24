// import { readContacts } from '../utils/readContacts.js';
// import { writeContacts } from '../utils/writeContacts.js';

// export const removeAllContacts = async () => {
//     try {
//         const contacts = await readContacts();
//         contacts.length = 0;
//         await writeContacts(contacts);
//         console.log('All contacts remove successfull!');
//     } catch (error) {
//         console.log('Failed to remove all contacts', error);
//     }
// };
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]');
  } catch (error) {
    console.error('Failed to remove all contacts', error);
    throw error;
  }
};

removeAllContacts();
