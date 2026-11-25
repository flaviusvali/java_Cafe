# Café Commit

Café Commit är ett kafé med en meny, en beställning och ett formulär för att lägga till nya rätter. Allt är byggt med HTML, CSS och JavaScript – inga ramverk.

Appen fungerar redan – men den är inte färdig. Det finns buggar, saknade funktioner, och filter och sortering som inte gör något än. Ni jobbar er igenom ärendena på er grupps **Trello-tavla**, ett kort i taget, med **Git** och **GitHub**.

---

## Kom igång

1. Klona er grupps repo:
   ```bash
   git clone <er-grupps-repo-url>
   ```
2. Öppna mappen `cafe-commit` i VS Code.
3. Högerklicka på `index.html` och välj **Open with Live Server**.

---

## Filerna

```
cafe-commit/
├─ index.html        All HTML – menyn, filtren, beställningen och formuläret
├─ css/
│  └─ style.css
└─ js/
   ├─ data.js        Arrayen menu – alla rätter
   ├─ menu.js        Ritar upp menyn: createMenuCard(), renderMenu(), populateCategories()
   ├─ order.js       Beställningen: order, addToOrder(), removeFromOrder(), renderOrder()
   ├─ filters.js     Filtrering och sortering: getVisibleItems(), updateMenu()
   ├─ form.js        Formuläret "Lägg till på menyn"
   └─ main.js        Startar appen
```

Script-filerna laddas i den ordningen längst ner i `index.html`. Alla funktioner och variabler går att använda från de filer som laddas efter.

---

## En rätt i menyn

```js
{
  id: 1,
  name: "Null-latte",
  category: "Kaffe",
  price: 42,
  vegetarian: true,
  rating: 4.6,
  allergens: ["laktos"]
}
```

---

## Så hänger filtren ihop

Allt som ska påverka vilka rätter som visas – och i vilken ordning – skrivs i **`getVisibleItems()`** i `js/filters.js`:

```js
function getVisibleItems() {
  let items = [...menu]; // en kopia av menyn

  // 1. filtrera  (items = items.filter(...))
  // 2. sortera   (items.sort(...))

  return items;
}
```

När användaren ändrar ett filter anropar ni **`updateMenu()`**, som ritar om menyn med resultatet från `getVisibleItems()`.

Flera kort ändrar i `getVisibleItems()`. Kör `git pull` på main innan ni börjar – och räkna med en och annan merge-konflikt.

---

## Arbetsflöde med Git och Trello (kort version)

1. Välj ett kort i **Att göra**, sätt ditt namn på det och flytta det till **Pågår**.
2. Hämta det senaste från main och skapa en egen branch:
   ```bash
   git checkout main
   git pull
   git checkout -b bugfix/01-kategori-dubbletter
   ```
3. Gör ändringen. Commita i små steg med tydliga meddelanden.
4. Pusha branchen och öppna en **Pull Request** mot `main`. Klistra in länken på Trello-kortet.
5. Flytta kortet till **Granskas**. En annan i gruppen granskar och godkänner.
6. Merga PR:en, flytta kortet till **Klart** – och alla kör `git pull` på main.

Läs korten i listan **Läs först** på Trello-tavlan för hela arbetsflödet.
