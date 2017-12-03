using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> Get();
        Contact Get(int id);
        Contact Create(Contact contact);
        void Update(Contact contact);
        void Delete(int id);
    }
}