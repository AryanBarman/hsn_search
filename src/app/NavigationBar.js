'use client'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CSS/NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from './contexts/AppContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import throttle  from 'lodash.throttle';
import debounce from 'lodash.debounce';

function NavigationBar() {
  const { search, setSearch } = useAppContext();
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(debouncedSearch);
    }, 500); 

    return () => clearTimeout(delayDebounceFn);
  }, [debouncedSearch, setSearch]);

  const handleInputChange = (e) => {
    setDebouncedSearch(e.target.value);
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="d-flex justify-content-center custom-navbar">
      <Container>
          <Form expand='lg' className="d-flex" onSubmit={e => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search by HSN Code or Keywords"
              className="me-2"
              name="searchbox"
              aria-label="Search"
              value={debouncedSearch} 
              onChange={handleInputChange}
              style={{ width: '60vw' }}
            />
            <NavDropdown.Item title="Dropdown" id="basic-nav-dropdown" > <Button type="submit" variant="outline-success">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </Button></NavDropdown.Item>
          </Form>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
