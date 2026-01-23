# 📌 Rättningsrapport – fed25s-the-webshop-kamasi

## 🎯 Uppgiftens Krav:
# The Webshop - En inlämningsuppgift

Denna uppgift går ut på att ni skall bygga en webbshop baserat på kraven här under.
Projektet är ett vite-projekt med vanilla/typescript.
Målet är att studenterna skall förstå vad som krävs för att skicka information mellan sidor, använda localStorage och kunna manipulera data i listor och objekt.

## VIKTIGT

Varukorgen skall vara en lista med objekt som baseras på en ny klass eller datatyp. Denna klass/datatyp skall innehålla en produkt men också hur många av denna produkt som varukorgen har. Ibland kan det behövas mer information i detta objekt, men minst skall klassen innhålla produkt och antal på något sätt.

## Teknik

- HTML
- SCSS
- TypeScript

## Krav - Betyg G

- En landningssida (startsida)
- En produktsida (Produktdetaljer)
- En kassasida
- En varukorg
- Kunna lägga produkter i varukorgen
- Simulera att ett köp genomförs på kassasidan
- Beräkna fram ett totalpris på produkterna i varukorgen
- Att informationen i varukorgen lagras genom utökade objekt, inte bara en produkt
- Att kunna öka/minska antalet produkter i varukorgen.
- Att kunna öka/minska antalet produkter på kassasidan
- Koden skall vara mycket väl strukturerad, väl formaterad samt innehålla god namngivning

## Styling

Försök att arbeta med så mycket styling ni hinner. Det är en rolig uppgift att ha med i ett portfolio framöver. Se till att era animationer är subtila. Arbeta med hero-images, kanske med lite video/ljud. Och skapa en bra struktur mer er scss redan från början.

## Krav för styling

Det är inget krav att video och ljud används.
Partials bör användas.
Mixins skall användas om möjligt, t.ex. för mediaqueries.
Ingen dubbelstyling, används mixins i sådana fall.

## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** Projektet uppfyller kraven för betyg G utifrån den granskade koden: det finns en landningssida (index.html), en produktsida (productPage.html), en kassasida (checkout.html) samt en varukorg som renderas i DOM och lagras i localStorage. Varukorgen bygger på en utökad datatyp (CartItem) som innehåller produktinformation och quantity, vilket uppfyller kravet på “utökade objekt”. Det går att lägga produkter i varukorgen, öka/minska antal både i varukorgen och på kassasidan via gemensam logik (attachCartLogic), och totalpris beräknas och uppdateras i UI. Köpflödet simuleras på kassasidan genom att formuläret fångas, en bekräftelse visas och varukorgen töms. SCSS är organiserad med partials och mixins, och TypeScript-koden är överlag modulärt uppdelad med tydliga ansvarsområden. Det finns dock några konkreta brister (t.ex. felaktig checkout-länk och trasig HTML-struktur i checkout.html) som bör åtgärdas för att göra lösningen mer robust, men helhetsflödet och G-kraven är uppfyllda.

💡 **Förbättringsförslag:**  
Funktionella buggar/robusthet:
- Fixa checkout-länken i cartHtml.ts: checkoutLink.href = "checkout" bör peka på korrekt fil/route (t.ex. "checkout.html").
- Rätta och validera HTML-strukturen i checkout.html (det finns obalanserade/extra stängtaggar). Kör filen genom en HTML-validator för att undvika oförutsägbart DOM-träd.

Initiering och struktur:
- Flytta renderProducts() till samma DOMContentLoaded-flöde som övrig initiering i main.ts för konsekvent uppstart (undvik att förlita dig på att containern “kanske finns”).
- Dela upp attachCartLogic i två funktioner: (1) logik för plus/minus och total, (2) logik för öppna/stäng cart-overlay. Det ger bättre separation of concerns.

Kodkvalitet och konsekvens:
- Standardisera prisformat ("kr" med/utan mellanslag) och totaltext (t.ex. alltid "Totalt: X kr"). Just nu skrivs totalen på olika sätt i olika delar.
- Gör checkout.ts mer självbärande: guard:a mot null innan addEventListener (if (!checkoutForm) return) även om main.ts redan försöker säkerställa detta.
- Använd gemensamma storage-funktioner konsekvent: checkout.ts kan använda clearCart() från cartStorage.ts istället för localStorage.removeItem("cart").

Data och identifierare:
- Undvik att använda produktnamn som id (coffee.name). Byt till ett stabilt unikt id (t.ex. numeriskt id eller slug) för att undvika krockar om två produkter får samma namn.

Säkerhet och DOM-byggande:
- Undvik innerHTML för dynamiskt innehåll i createProductHtml.ts. Bygg DOM-noder och använd textContent för namn/beskrivning för att undvika XSS-mönster (även om datan nu är lokal).

Tillgänglighet och UX:
- Lägg till aria-label på plus/minus-knappar (t.ex. "Öka antal", "Minska antal").
- För orderbekräftelsen: överväg en tydlig stäng-knapp istället för att hela rutan stängs vid klick var som helst, och se till att fokus/keyboard-navigering fungerar.

Styling/byggartefakter:
- Undvik dubbelkällor: om src/scss/main.css är en byggoutput, håll den utanför källträdet eller tydliggör att SCSS är källan och CSS genereras vid build, för att minska förvirring.

Fortsätt så—du har en tydlig moduluppdelning och ett fungerande webshop-flöde med localStorage, vilket är precis kärnan i uppgiften. Med några små justeringar (särskilt checkout-länken och HTML-valideringen) blir detta riktigt stabilt och proffsigt.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| marcuswesterblom | 49 | 35% | 0.2 | 0.26 |
| Crol91 | 43 | 30.7% | 0.2 | 0.24 |
| Sintia Saado | 43 | 30.7% | 0.2 | 0.24 |
| Sintia Saado | 4 | 2.9% | 0.2 | 0.13 |
| Karl Andersson | 1 | 0.7% | 0.2 | 0.12 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
