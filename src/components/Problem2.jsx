import axios from "axios";
import { useEffect, useState } from "react";


const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []); 

  const fetchContacts = async () => {
    try {
      const response = await axios.get('contact.json'); // Update with your API endpoint
      setContacts(response.data.results);
      filterContacts();
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const filterContacts = () => {
    let filtered = contacts;
    if (onlyEven) {
      filtered = filtered.filter((contact) => contact.id % 2 === 0);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredContacts(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setTimeout(() => {
      filterContacts();
    }, 300);
  };

  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
    filterContacts();
  };
    return (
        <div>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <label>
          <input type="checkbox" checked={onlyEven} onChange={handleCheckboxChange} />
          Only even
        </label>
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>{contact.name} - {contact.country.name}</li>
          ))}
        </ul>
      </div>
    );
};

export default Problem2;