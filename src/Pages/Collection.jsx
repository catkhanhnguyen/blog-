import { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionContent from '../Components/CollectionContent';
import Layout from '../Layout/Layout';


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
      <Layout>
        <CollectionContent tags={tags} mealtypes={mealtypes} />
      </Layout>
    </div>
  );
}



export default Collection;
