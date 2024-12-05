import React, { useState } from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  const [activeCategories, setActiveCategories] = useState([]);

  const toggleCategory = (category) => {
    const element = document.getElementById(category); // Pronalaženje elementa po ID-u
  
    if (activeCategories.includes(category)) {
      setActiveCategories((prev) => prev.filter((cat) => cat !== category)); // Uklanja kategoriju ako je već aktivna
    } else {
      setActiveCategories((prev) => [...prev, category]); // Dodaje novu kategoriju
  
      if (element) {
        const yOffset = -90; // Pomeranje za 50px iznad
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({ top: y, behavior: "smooth" }); // Glatko skrolovanje do željene pozicije
      }
    }
  };
  

  const menuItems = [
    { name: "Topli napici", items: [{ name: "Espresso", price: 159 }, { name: "Espresso sa mlekom", price: 189 }, { name: "Cappuccino", price: 199 }, { name: "Latte", price: 259 }, { name: "Domaća kafa", price: 159 }, { name: "Nescafe", price: 219}, { name: "Topla čokolada", price: 269 }, { name: "Dolcezza čaj", price: 199 }, { name: "Dolcezza čaj sa rumom", price: 239 }] },
    { name: "Dodaci šank", items: [{ name: "Mleko 0.005", price: 19 }, { name: "Med", price: 19 }, { name: "Šlag", price: 29 }, { name: "Plazma 35g", price: 29 }, { name: "Sladoled vanila", price: 49 }, { name: "Kikiriki 80g", price: 149 }] },
    { name: "Sokovi", items: [{ name: "Gusto sok 0.2", price: 219}, { name: "Cedevita 0.3", price: 199 }, { name: "Pepsi 0,25", price: 219 }, { name: "Pepsi Max 0.25", price: 129 }, { name: "7UP 0.25", price: 219 }, { name: "Evervess 0.25", price: 219 }, { name: "Mirinda 0.25", price: 219 }, { name: "Tonik 0.25", price: 219 }, { name: "Cockta 0.25", price: 219 }, { name: "Guarana 0.25", price: 269 }, { name: "Red bull", price: 399 }, { name: "Limunada", price: 249 }, { name: "Detox limunada", price: 259 }, { name: "Ceđena pomorandža", price: 319 }, { name: "Ceđeni mix", price: 349 }, { name: "Vitaminska bomba", price: 359 }, { name: "Top tempo", price: 319 }] },
    { name: "Vode", items: [{ name: "Aqua Viva 0.33", price: 169 }, { name: "Aqua Viva 1l", price: 199 }, { name: "Knjaz Miloš 0.33", price: 169 }, { name: "Knjaz Miloš 1l", price: 199 }, { name: "Knjaz Miloš arom. 0.33", price: 199 }, { name: "Romerquelle 0.33", price: 249 }] },
    { name: "Piva", items: [{ name: "Paulaner pšenični 0.5", price: 319 }, { name: "Paulaner pšenični 0.3", price: 199 }, { name: "Estrella 0.5", price: 269 }, { name: "Estrella 0.3", price: 169 }, { name: "Pilsner Urquell 0.5", price: 299 }, { name: "Pilsner Urquell 0.3", price: 189 }, { name: "Jezek 0.5", price: 229 }, { name: "Jezek o.3", price: 149 }, { name: "Nektar 0.5", price: 199 }, { name: "Nektar 0.3", price: 129 }, { name: "Kozel tamni 0.5", price: 299 }, { name: "Kozel tamni 0.3", price: 189 }, { name: "Kabinet Brka Apa 0.5", price: 399 }, { name: "Kabinet Brka Apa 0.3", price: 259 }, { name: "Dogma Hoptopod IPA 0.5", price: 399 }, { name: "Dogma Hoptopod IPA 0.3", price: 259 }, { name: "Dogma Wish & Goal Pils 0.5", price: 379 }, { name: "Dogma Wish & Goal Pils 0.3", price: 239 }, { name: "Jelen 0.5", price: 159 }, { name: "Zaječarsko 0.5", price: 159 }, { name: "Lav premium 0.33", price: 199 }, { name: "Tuborg 0.33", price: 239 }, { name: "Blanc 0.33", price: 239 }, { name: "Nikšićko svetlo 0.33", price: 229 }, { name: "Heineken 0.25", price: 259 }, { name: "Heineken bezalkoholni 0.25 ", price: 259 }, { name: "Stella artois 0.33", price: 299 }, { name: "Kapuziner 0.5", price: 399 }, { name: "Birra Moretti 0.33", price: 239 }, { name: "Bavaria 0.25", price: 259 }, { name: "Corona 0.35", price: 439 }, { name: "Somersby 0.33", price: 299 }, { name: "Hoegaarden 0.33", price: 259 }, { name: "Banjalučko 0.5", price: 159 }, { name: "Schneider's hell 0.5", price: 379 }, { name: "Kapbinet Supernova IPA 0.33", price: 319 }, { name: "Dogma Svetionik 0.33", price: 319 }, { name: "New Pils 0.33", price: 299 }] },
    { name: "Žestina", items: [{ name: "Gorki list 0.05", price: 199 }, { name: "Jegermeister 0.03", price: 239 }, { name: "Baileys 0.03", price: 259 }, { name: "Ballantines 0.03", price: 269 }, { name: "Johnie Walker Red 0.03", price: 269 }, { name: "Johnie Walker Black 0.03", price: 299 }, { name: "Jack Daniels 0.03", price: 319 }, { name: "Jameson 0.03", price: 349 }, { name: "Vinjak Rubin 0.05", price: 199 }, { name: "Smirnof vodka 0.03", price: 249 }, { name: "Martini Bianco 0.03", price: 229 }, { name: "Tequila Two Fingers 0.03", price: 249 }, { name: "Džin Bobis 0.03", price: 299 }, { name: "Džin Bombay Sapphire 0.03", price: 259 },  { name: "Rakija kajsija 0.05", price: 199 }, { name: "Rakija šljiva 0.05", price: 199 }, { name: "Rakija dunja 0.05", price: 199 }, { name: "Rakija medovača 0.05", price: 199 }, { name: "Rakija loza 0.05", price: 199 }, { name: "Viljamovka Takovo 0.05", price: 219 }, { name: "Rakija šamar 0.03", price: 249 }, { name: "Rum Captain morgan 0.03", price: 219 }, { name: "Rum Kraken 0.03", price: 299 }] },
    { name: "Kokteli", items: [{ name: "Džin & Tonic Bombay Sapphire", price: 399 }, { name: "Džin & Tonic Bobby's", price: 399 }, { name: "Blue Lagoon 0.33", price: 249 }, { name: "Mojito 0.33", price: 249 }, { name: "Sex on the beach", price: 249 }] },
    { name: "Vina", items: [{ name: "Vino kuće crno", price: 199 }, { name: "Vino kuće belo", price: 199 }, { name: "Vino kuće rose", price: 199 }] },
    { name: "Doručak", items: [
      { name: "Bekendes", price: 379, description: "Jaja, barena slanina, sir" },
      { name: "Garaža doručak", price: 449, description: "Jaja, kobasica, barena slanina, sir" },
      { name: "Omiljeni", price: 379, description: "Jaja, pohovani kačkavalj, suhomesnato" },
      { name: "Omlet sa povrćem", price: 269, description: "Jaja, sir" },
      { name: "Omlet sa sirom", price: 269, description: "Jaja, sir" },
      { name: "Omlet sa slaninom", price: 349, description: "Jaja, barena slanina" },
      { name: "Garaža omlet", price: 409, description: "Jaja, barena slanina, sir" },
      { name: "Tost sendvič vrat", price: 319, description: "Suhomesnato, sir, krompir" },
      { name: "Tost sendvič kulen", price: 319, description: "Suhomesnato, sir, krompir" },
      { name: "Club sendvič", price: 489, description: "Piletina, barena slanina, sir, krompir" },
      { name: "Tortilja piletina", price: 359, description: "Piletina, barena slanina, krompir" }
  ]},

  { name: "Starters", items: [
      { name: "Suhomesnata plata", price: 899, description: "Suhomesnato, sir, kajmak" },
      { name: "Suhomesnati mix 250g", price: 599, description: "Suhomesnato" },
      { name: "Paleta sireva 350g", price: 699, description: "Sir" },
      { name: "Pohovani kačkavalj 300g", price: 399, description: "Pohovani kačkavalj" },
      { name: "Dan posle čorba", price: 299, description: "Teleća čorba" },
      { name: "Taquitos 5 kom", price: 399, description: "Taquitos" },
      { name: "Panirana mocarela", price: 299, description: "Panirana mocarela" }
  ]},

  { name: "Dodaci", items: [
      { name: "Pomfrit 200g", price: 269 },
      { name: "Batat pomfrit 200g", price: 269 },
      { name: "Začinjeni krompir 200g", price: 269 },
      { name: "Domaći čips 200g", price: 269 },
      { name: "Onion rings 150g", price: 269 },
      { name: "Kikiriki 80g", price: 149 }
  ]},

  { name: "Glavna jela", items: [
      { name: "Cezar salata", price: 549, description: "Piletina, barena slanina, sir" },
      { name: "Crispy chicken", price: 499, description: "Hrskava piletina, sir" },
      { name: "Pileća krilca 500g", price: 499, description: "Pileća krilca" },
      { name: "Hrskava piletina 300g", price: 269, description: "Hrskava piletina, krompir" },
      { name: "Dimljeni pileći batak 200g", price: 599, description: "Burger lepinja, dimljeni pileći batak, krompir" },
      { name: "Juneći ćevap 300g", price: 649, description: "Juneći ćevap, pomfrit" },
      { name: "Rebarca", price: 749, description: "Rebarca, krompir" },
      { name: "Kobasice porcija 300g", price: 399, description: "Kobasice, krompir" },
      { name: "Gica kožica za 2 osobe", price: 849, description: "Kobasice, krompir, Kozel bure" },
      { name: "Classic burger", price: 699, description: "Burger meso, sir, barena slanina, burger lepinja, krompir" },
      { name: "Burger with cheese", price: 649, description: "Burger meso, sir, barena slanina, krompir" },
      { name: "Garaža burger", price: 649, description: "Burger meso, sir, barena slanina, krompir, topli čedar" },
      { name: "Chicken burger", price: 649, description: "Pileći burger, burger lepinja, sir, krompir" },
      { name: "Vege burger", price: 649, description: "Vege burger, burger lepinja, krompir" },
      { name: "Paleta kobasica 500g", price: 799, description: "Kobasica, krompir" }
  ]},

  { name: "Salate", items: [
      { name: "Paradajz salata", price: 199 },
      { name: "Šopska salata", price: 199 },
      { name: "Krastavac", price: 199 },
      { name: "Sveža ljuta", price: 199 },
      { name: "Kupus salata", price: 199 }
  ]},

  { name: "Poslastice", items: [
      { name: "Plazma kugle", price: 99 },
      { name: "Trileće", price: 269 },
      { name: "Slatka pita Euro krem", price: 269 },
      { name: "Slatka pita Nutella", price: 269 },
      { name: "Slatka pita Euro krem višnja", price: 249 },
      { name: "Slatka pita Nutella višnja", price: 249 }
  ]}
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {menuItems.map((category, index) => (
          <li key={index}>
            <button
              id={category.name}
              className={styles.categoryButton}
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
            </button>
            {activeCategories.includes(category.name) && (
              <ul className={styles.dropdown}>
                {category.items.length > 0 ? (
                  category.items.map((item, idx) => (
                    <li key={idx} className={styles.dropdownItem}>
                      <div className={styles.itemName}>
                        {item.name}
                        {item.description && (
                          <div className={styles.itemDescription}>
                            {item.description}
                          </div>
                        )}
                      </div>
                      <div className={styles.price}>
                        {item.price}
                      </div>
                    </li>
                  ))
                ) : (
                  <li className={styles.dropdownItem}>Trenutno nema stavki</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;