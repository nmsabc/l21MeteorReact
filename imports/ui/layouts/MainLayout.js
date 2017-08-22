import React from 'react';

export const MainLayout = ({content}) => (
  <div className = 'main-layout'>
    <header>
      <h2>My resolutions</h2>
      <nav>
        <a href="/"> Home of Resolutions </a>
        <a href="/about"> About </a>
        <a href="/contact"> Contact </a>
      </nav>
    </header>

    <main>
      {content}
    </main>
  </div>
)
