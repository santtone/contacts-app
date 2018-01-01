using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Authorization;

namespace ContactsWebApi.Controllers
{
    [Authorize]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var contacts = _contactService.FindContacts();
            return new JsonResult(contacts);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var contact = _contactService.FindContactById(id);
            return new JsonResult(contact);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Contact contact)
        {
            var created = _contactService.CreateContact(contact);
            return new JsonResult(created);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Contact contact)
        {
            _contactService.UpdateContact(id, contact);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _contactService.DeleteContact(id);
            return new NoContentResult();
        }
    }
}