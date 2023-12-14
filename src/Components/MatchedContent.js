import React from 'react';
import './MatchedContent.css';
import data from './content.json';
import UseContentful from '../UseContentful';
import { useState,useEffect  } from 'react';
import MainFooter from './MainFooter';


const MatchedContent = (props) => {
  const ob = props.query;
  console.log(ob);


  const a = props.path;
  // console.log(data[a][ob].contentArr);


  // const Content = data[ob] && data[ob].contentArr ? data[ob].contentArr : ["Definition not found" ];
  // console.log(Content);

  console.log("a:", a);
  console.log("ob:", ob);
  console.log("data:", data);
  const Content = data[a][ob] && data[a][ob].contentArr ? data[a][ob].contentArr : ["Definition not found" ];
  // const Content = data[a]?.[ob]?.contentArr ?? ["Definition not found"];
  console.log(Content);


  //api 

  const [jsob, setJsob] = useState({});
  const { jsobject } = UseContentful();
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
  const obContent = jsob.items && jsob.items[0]?.fields?.html[a];

  const ContentApi = obContent?.[ob]?.contentArr ?? ["Loading..."];;
  console.log(ContentApi);

  // if (!obContent) {
  //   console.error('No content found.');
  //   return null; // or handle the absence of content appropriately
  // }
  // console.log("hb", obContent[ob].contentArr)
  
  return (
    <div className='wrapper_html_home text-white'>
      <main className='wrapper_html_content'>
        <section className='wrapper_html_heading'>
          <h4 className='text-white html_heading'>{props.query.toUpperCase()}</h4>
          {/* <div className='html_btn'>
            <a href="" className='bg-green'>
              Home
            </a>
            <a href="" className='bg-green'>
              Next
            </a>
          </div> */}
        </section>

        <section className='wrapper_html_home_body'>
          <div className='content_html'>
            {
              ContentApi.map((c) => {
                return (
                  <p>
                    {c}
                  </p>
                )
              })
            }
            {/* <p>{Content}</p> */}
          </div>
        </section>
        <section>
        <MainFooter/>
        </section>
      </main>

      {/* course */}
      <aside className='container_courses'>
        Courses
      </aside>
    </div>
  )
}

export default MatchedContent