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
        });
        main.style.backgroundColor = '#000';
        main.style.color = '#fff';
        headers.forEach(header => {
          header.style.backgroundColor = '#fff';
          header.style.color = '#000';
          header.querySelectorAll('a').forEach(a => {
            a.style.setProperty('color', '#000', 'important');
          });
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
          header.querySelectorAll('a').forEach(a => {
            a.style.setProperty('color', '#fff', 'important');
          });
        });
        footers.forEach(footer => {
          footer.style.backgroundColor = '#000';
          footer.style.color = '#fff';
        });
      });
      // Links im Main nur beim Hover über Main anzeigen
      main.addEventListener('mouseover', () => {
        links.forEach(link => {
          link.style.display = 'block';
        });
      });
      main.addEventListener('mouseout', () => {
        links.forEach(link => {
          link.style.display = 'none';
        });
      });
      // Fallback: Verstecke Links, wenn Maus außerhalb von Main ist
      document.addEventListener('mousemove', (e) => {
        const rect = main.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          links.forEach(link => {
            link.style.display = 'none';
          });
        }
      });
      // Sichtbarkeit der Links zurücksetzen, wenn Header oder Footer betreten wird
      headers.forEach(header => {
        header.addEventListener('mouseenter', () => {
          links.forEach(link => {
            link.style.display = 'none';
          });
        });
      });
      footers.forEach(footer => {
        footer.addEventListener('mouseenter', () => {
          links.forEach(link => {
            link.style.display = 'none';
          });
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
