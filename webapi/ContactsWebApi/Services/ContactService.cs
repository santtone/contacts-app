using System.Collections.Generic;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;

namespace ContactsWebApi.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindContacts()
        {
            return _contactRepository.Get();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.Get(id);
        }

        public Contact CreateContact(Contact contact)
        {
            return _contactRepository.Create(contact);
        }

        public void UpdateContact(int id, Contact contact)
        {
            var saved = FindContactById(id);
            if (saved != null)
            {
                _contactRepository.Update(contact);
            }
        }

        public void DeleteContact(int id)
        {
            _contactRepository.Delete(id);
        }
    }
}