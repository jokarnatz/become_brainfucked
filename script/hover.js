function getAllElements(selectors) {
  let result = [];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => result.push(el));
  });
  return result;
}

const mains = getAllElements(['main', '.main']);
const headers = getAllElements(['header', '.hd_nav']);
const footers = getAllElements(['footer', '.ft_txt']);
const isRessourcesPage = window.location.pathname.includes('bf_ressources');

mains.forEach(main => {
  if (isRessourcesPage) {
    // Speziallogik für bf_ressources
    const h1 = main.querySelector('.bf_ress_h1');
    const links = main.querySelectorAll('.bf_ress_link');
    if (h1 && links.length) {
      main.addEventListener('mouseenter', () => {
        console.log('mouseenter: Links anzeigen');
        h1.style.display = 'none';
        links.forEach(link => {
          link.style.display = 'block';
          const a = link.querySelector('a');
          if (a) a.style.color = '#fff';
          // Header-Farbe beim Link-Hover setzen
          link.addEventListener('mouseenter', () => {
            headers.forEach(header => {
              header.style.setProperty('color', '#000', 'important');
              header.querySelectorAll('a').forEach(a => {
                a.style.setProperty('color', '#000', 'important');
                // Setze auch für :visited und :active
                a.addEventListener('mousedown', () => {
                  a.style.setProperty('color', '#000', 'important');
                });
                a.addEventListener('mouseup', () => {
                  a.style.setProperty('color', '#000', 'important');
                });
                a.addEventListener('click', () => {
                  setTimeout(() => {
                    a.style.setProperty('color', '#000', 'important');
                  }, 10);
                });
              });
            });
          });
          link.addEventListener('mouseleave', () => {
            headers.forEach(header => {
              header.style.setProperty('color', '#fff', 'important');
              header.querySelectorAll('a').forEach(a => {
                a.style.setProperty('color', '#fff', 'important');
                // Setze auch für :visited und :active
                a.addEventListener('mousedown', () => {
                  a.style.setProperty('color', '#fff', 'important');
                });
                a.addEventListener('mouseup', () => {
                  a.style.setProperty('color', '#fff', 'important');
                });
                a.addEventListener('click', () => {
                  setTimeout(() => {
                    a.style.setProperty('color', '#fff', 'important');
                  }, 10);
                });
              });
            });
          });
        });
        main.style.backgroundColor = '#000';
        main.style.color = '#fff';
        headers.forEach(header => {
          header.style.backgroundColor = '#fff';
          header.style.color = '#000';
        });
        footers.forEach(footer => {
          footer.style.backgroundColor = '#fff';
          footer.style.color = '#000';
        });
      });
      main.addEventListener('mouseleave', () => {
        console.log('mouseleave: Links verstecken');
        h1.style.display = 'block';
        links.forEach(link => {
          link.style.display = 'none';
          const a = link.querySelector('a');
          if (a) a.style.color = '#000';
        });
        main.style.backgroundColor = '#fff';
        main.style.color = '#000';
        headers.forEach(header => {
          header.style.backgroundColor = '#000';
          header.style.color = '#fff';
        });
        footers.forEach(footer => {
          footer.style.backgroundColor = '#000';
          footer.style.color = '#fff';
        });
      });
    }
  } else {
    // Standard-Farbwechsel für alle anderen Seiten
    main.addEventListener('mouseenter', () => {
      headers.forEach(header => {
        header.style.backgroundColor = '#fff';
        header.style.color = '#000';
        header.querySelectorAll('a').forEach(link => {
          const img = link.querySelector('img');
          if (img) {
            link.style.setProperty('background', '#fff', 'important');
            link.style.setProperty('color', '#000', 'important');
          } else {
            link.style.setProperty('background', '#fff', 'important');
            link.style.setProperty('color', '#000', 'important');
          }
        });
      });
      footers.forEach(footer => {
        footer.style.backgroundColor = '#fff';
        footer.style.color = '#000';
      });
      main.style.backgroundColor = '#000';
      main.style.color = '#fff';
    });
    main.addEventListener('mouseleave', () => {
      headers.forEach(header => {
        header.style.backgroundColor = '#000';
        header.style.color = '#fff';
        header.querySelectorAll('a').forEach(link => {
          const img = link.querySelector('img');
          if (img) {
            link.style.setProperty('background', '#fff', 'important');
            link.style.setProperty('color', '#000', 'important');
          } else {
            link.style.setProperty('background', 'transparent', 'important');
            link.style.setProperty('color', '#fff', 'important');
          }
        });
      });
      footers.forEach(footer => {
        footer.style.backgroundColor = '#000';
        footer.style.color = '#fff';
      });
      main.style.backgroundColor = '#fff';
      main.style.color = '#000';
    });
  }
});
