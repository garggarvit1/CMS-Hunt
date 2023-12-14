import React, { useEffect, useState } from 'react';
import './SideNavbar.css'
import data from './content.json'
import UseContentful from '../UseContentful';


const SideNavbar = (props) => {
  const query = props.query;
  console.log(query);

  const matchedContent = data[query];
  console.log(matchedContent);
  const matchedContentArr = Object.keys(matchedContent);
  console.log(matchedContentArr);

  //api

  const [jsob, setJsob] = useState({});
  const { jsobject } = UseContentful();
  const obj = jsob;

  //   useEffect(()=>{
  //     jsobject().then((response)=>{
  //         console.log(response.items[0].fields.html)
  //         setJsob(response)
  //     });
  //   },[]);
  useEffect(() => {
    jsobject().then((response) => {
      if (response && response.items && response.items[0] && response.items[0].fields && response.items[0].fields.html) {
        console.log(response.items[0].fields.html);
        setJsob(response);
      } else {
        console.error('Invalid response format:', response);
      }
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  console.log("ob", jsob);

  // const obContent=jsob.items[0].fields.html;
  const obContent = obj.items && obj.items[0]?.fields?.html;

  if (!obContent) {
    console.error('No content found.');
    return null; // or handle the absence of content appropriately
  }
  console.log("hb", obContent[query])
  const matchedContentArrApi = Object.keys(obContent[query]);
  console.log(matchedContentArrApi);



  return (
    <div>
      <div className='wrapper_body'>
        <aside className='wrapper_body_left'>
          <div className='wrapper_body_left_heading'>{query.toUpperCase()} tutorial</div>


          {matchedContentArrApi.map((url, index) => (
            <a href={`/main?page=${query}&subpage=${url}`} className='horizontal_menu_item'>
              {url}
            </a>
          ))}
          {/* <a href="" className='horizontal_menu_item'>{query}</a> */}
        </aside>
      </div>

    </div>
  )
}

export default SideNavbar;