# SimpleVue

`SimpleVue` è una piccola libreria per la creazione di applicazioni reactive simili a Vue.js. Questa libreria è progettata per dimostrare i concetti fondamentali del data binding e dell'interazione con il DOM usando JavaScript e Proxy.

## Struttura del Progetto

Il progetto è composto da:

- **`SimpleVue.js`**: La classe `SimpleVue` che gestisce il data binding e l'interazione con il DOM.
- **`app.js`**: Il file principale che inizializza un'istanza di `SimpleVue` con una configurazione specifica.
- **`index.html`**: Un esempio di utilizzo della libreria `SimpleVue`.

## Installazione

1. **Clona il repository**:

   ```bash
   git clone https://github.com/tuo-utente/simplevue.git
   cd simplevue
   ```

2. **Installa le dipendenze** (se ci sono, per esempio usando npm o yarn):

   ```bash
   npm install
   ```

3. **Apri `index.html` nel tuo browser**.

## Utilizzo

### Configurazione di `SimpleVue`

1. Crea un'istanza di `SimpleVue` in `app.js`:

   ```javascript
   import SimpleVue from './scripts/SimpleVue.js';

   document.addEventListener('DOMContentLoaded', () => {
     const app = new SimpleVue({
       el: '#app',
       data: {
         count: 0,
       },
       methods: {
         increment() {
           this.count++;
         },
         decrement() {
           this.count--;
         },
       },
     });
   });
   ```

2. Assicurati che il tuo HTML contenga un elemento con `id="app"`:

   ```html
   <div id="app">
     <p>Contatore: {{ count }}</p>
     <button @click="increment">Incrementa</button>
     <button @click="decrement">Decrementa</button>
   </div>
   ```

### Funzionamento

- **Data Binding**: I dati definiti nel campo `data` della configurazione sono automaticamente inseriti nel template HTML utilizzando la sintassi `{{ key }}`.
- **Event Handling**: I metodi definiti nel campo `methods` possono essere associati agli eventi degli elementi HTML usando l'attributo `@click`.

## Esempio

Apri `index.html` nel tuo browser per vedere l'esempio funzionante. Vedrai un contatore che puoi incrementare o decrementare cliccando sui pulsanti.

## Contributi

I contributi sono benvenuti! Se hai suggerimenti, bug report, o miglioramenti, sentiti libero di aprire una **pull request** o **issue**.

## Licenza

Questo progetto è concesso in licenza con la [Licenza MIT](LICENSE).
