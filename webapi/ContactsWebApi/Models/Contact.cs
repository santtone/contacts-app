using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ContactsWebApi.Models
{
    [Table("Contact")]
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }

        public Contact()
        {
        }

        public Contact(int id, string firstName, string lastName, string phone, string streetAddress, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            StreetAddress = streetAddress;
            City = city;
        }
    }
}