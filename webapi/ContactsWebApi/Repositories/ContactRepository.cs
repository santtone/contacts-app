using System.Collections.Generic;
using System.Linq;
using ContactsWebApi.Config;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;
        private readonly ContactsDbContext _context;

        public ContactRepository(ContactsDbContext context)
        {
            _context = context;
            _contacts = new List<Contact>();
            Initialize();
        }

        public List<Contact> Get()
        {
            return _contacts;
        }

        public Contact Get(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public Contact Create(Contact contact)
        {
            var maxId = _contacts.Max(c => c.Id);
            contact.Id = maxId + 1;
            _contacts.Add(contact);
            return contact;
        }

        public void Update(Contact contact)
        {
            var i = _contacts.FindIndex(c => c.Id == contact.Id);
            _contacts[i] = contact;
        }

        public void Delete(int id)
        {
            _contacts.RemoveAll(c => c.Id == id);
        }

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Sami", "Anttonen", "01234567", "Skinnarilankatu 35", "Lappeenranta"),
                new Contact(2, "Teppo", "Testaaja", "01234568", "Skinnarilankatu 35", "Lappeenranta")
            };
        }
    }
}