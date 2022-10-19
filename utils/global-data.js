export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Jay Doe';

  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';

  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  const navbarItems = process.env.NAVBAR_ITEMS
    ? decodeURI(process.env.NAVBAR_ITEMS)
    : [{ path: 'cabeca', title: 'Cabeça', children: [
          { path: 'neurocranio', title: 'Neurocrânio', children: [
            { path: 'osso-frontal', title: 'Osso Frontal' },
            { path: 'osso-occipital', title: 'Osso Occipital' },
          ]}
        ]}
      ]
    
  return {
    name,
    blogTitle,
    footerText,
    navbarItems,
  };
};
