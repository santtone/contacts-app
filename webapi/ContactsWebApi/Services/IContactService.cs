using System.Collections.Generic;
using ContactsWebApi.Models;

namespace ContactsWebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindContacts();
        Contact FindContactById(int id);
        Contact CreateContact(Contact contact);
        void UpdateContact(int id, Contact contact);
        void DeleteContact(int id);
    }
}
