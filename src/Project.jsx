import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill';

const Project = () => {
  // const [data, setData] = useState(0);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const [data, setData] = useState({ hits: [] });
  // useEffect(async () => {
  //   const result = await axios(
  //     // 'https://hn.algolia.com/api/v1/search?query=redux',
  //     '/project_data/getProjectList',
  //   );
  //   setData(result.data);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        // 'https://hn.algolia.com/api/v1/search?query=redux',
        '/project_data/getProjectList',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    // <div>
    // </div>
    <div id="project">
      <div className="project">
        <h1 className="sub_tit"><span>project</span></h1>
        <ul>
          {data.hits.map((item) => (
            <li key={item.seq}>
              <a href={`/project/${item.seq}`}>
                <img src={item.p_img} alt={item.p_title} />
                <strong>{item.p_title}</strong>
                <span>{item.p_desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
