import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import CollectionContent from '../Components/CollectionContent';
import Footer from '../Components/Footer';

function Collection() {
  const tagUrl = '/tags';
  const mealtypeUrl = '/mealtypes';
  const [tags, setTags] = useState([]);
  const [mealtypes, setMealTypes] = useState([]);

  useEffect(() => {
    axios.get(tagUrl)
      .then(response => {
        setTags(response.data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(mealtypeUrl)
      .then(response => {
        setMealTypes(response.data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <CollectionContent tags={tags} mealtypes={mealtypes} />
      <Footer />
    </div>
  );
}

export default Collection;
