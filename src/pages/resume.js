import React from 'react';
import { useEffect, useRef } from 'react';

export default function resume() {
    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '../../public/Sari_Resume_2022.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyResume">
        <div className="header">React sample</div>
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );
};