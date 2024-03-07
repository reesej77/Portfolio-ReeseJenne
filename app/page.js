// components/Layout.js

import React from 'react';
import fs from 'fs';
import path from 'path';

function Layout({ children }) {
  const filePath = path.resolve('public', 'html', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default Layout;