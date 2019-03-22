#TRACCIA LIVE DEMO XE VUE:

## DEMO VUE BASICS

```terminal
101 = interpolate (1=CDN, 2=#app, 3=data, 3+bonus=CONSOLE app.msg=xxx)
102 = computed property (4=lowerMsg)
103 = | filter (5=filter uppercase5)
104 = global filter (5+bonus=capitalize)
105 = v-on: + @ / methods (6=v-on:click=doSomething, 6+bonus=@click=doSomething(par))
106 = v-on modifiers (7=v-on:click.once e @click.right)
107 = v-model (8=v-model, 8+bonus=+modifier .lazy.trim)
108 = v-if / v-show (9=v-if 'net' vs v-show 'java')
109 = v-for (10=arr v-for semplice, 10+bonus= :key e idx + addTo(push) + update this.$set)
110 = component (11=xe-event data() e template,  10+bonus x-template)
111 = (12=props + v-binds:title)
112 = (13=timeAgo e diffDays computed, 13+bonus=formatDate par)
113 = (14=v-on+$emit 'like', 14+bonus=method alert)
114 = two-way v-bind.sync (15=date su app, 16=v-bind:.sync, 16+bonus: \$emit update:xxx)
115 = (17=life-cycle hooks + toggle) (18=Prop type+validator)
116 = Aggiungere discorso degli style/css dinamici (19= :class in base a 'java' 'net')
(20= class fisso + :class [array]) (21= :style in base a diffDays colore/dimensione px)
```

## DEMO USING TYPESCRIPT + SFC + CLI

```terminal
200 = MOSTRO CLI per inizializzare progetto da zero (seleziono TS + Router e basta) giro di visita su scaffold del progetto mostro navigazione Vue.Router -> pagina Home / About
-   (200+bonus) = Modificare codice di Home.vue per mostrare EAGER/LAZY load del HelloWorld
201 = Porto codice del componente xe-event
-   (201a x-template) (201b JS object) (201c aggiungo JSDOC per avere TS intelligente)
202 = Porto codice del globalFilter che è utilizzato nel componente
-   (202a filter.ts + TS annotation) (202b main.ts)
203 = Modifico About.0.vue per aggiungere utilizzo di base del xe-event con dati statici
-   (203a import component XeEvent) (203b copy data statici) (203c copy methods) (203d html)
```

> A QUESTO PUNTO LANCIO cd vuecli && npm run serve OPPURE LANCIO vue ui e lancio Task serve
> FACCIO UN GIRO DI PROVA DEL CODICE APPLICATIVO (DOVREBBE FUNZIONAR TUTTO COME PRIMA YEAH)
> DATO CHE CI SONO AGGIUNGO SEMPRE DA vue ui LA DIPENDENZA DA axios per fare richieste http

```terminal
204 = Aggiungo service.ts con logica tutta TS
-   (204a model interface + type) + (204b helper safeGet + \_cache) (204c chiamate async/await)
205 = Modifico About.vue per aggiungere logica di chiamate API utilizzo servizio
-   (205a import \* as http + load) (205b printout event cliccato) (205c cambio html for+load)
```

> FACCIO ALTRO GIRO DI PROVA E DOVREBBE FUNZIONARE TUTTO -> CARICA EVENTI + RELOAD + ALERT

```
206 = Faccio nuovo componente XeCard (refactor con vue-class-component + @vue-property-decorators sintassi alla NGx + @Decorators + TS ALL THE WAY DOWN!
- (206a data() -> fields) (206b props -> @Prop) (206c computed -> getters) (206d methods)
- (206e watcher -> method + @Watch) (206f life-cycle hooks)
207 = Creo pagina Detail.vue che utilizza componente XeCard + @Watch(\$route) + v-bind=evt
- (207a creo componente che usa XeCard) (207b usa @Watch x fetchData) (207c v-bind=Object)
208 = Modifico router.ts per aggiungere la "detail"
209 = Modifico About.vue per fare link che salta su pagina detail passando {params: id}
```

> GIRO DI PROVA CHE TUTTO FUNZIONI CON MEMORIZZAZIONE LINK + CAMBIO DATA TWO-WAY TRA LE SCHERMATE GRAZIE ALLA \_cache SU SERVICE CONDIVISO (QUALCUNO HA DETTO STATE-MANAGEMENT?)

## ADVANCED DEEP VUE REACTIVITY SYSTEM

```terminal
301 = Reactivity computed (23=mostrando console.warn('GUESS ') su computed) (24=+spekaer)
302 = Reactivity system (25=cambio speaker+=<3 -> observer mostrando i console.warn->DEPS)
303 = Reactivity watchers (26=semplice, 27=con handler+immediate + cambio TS->speaker=Dan)
(27+bonus citare altri possibilità watch "a.b.c" + deep utili per Objects)
304 = v-slot (28=semplice bitTitle con template <slot>)
305 = render funciton (29= trasformo v-slot -> h<size> -> VNode) (29+bonus=switch NO)
306 = scoped slot (30= aggiungo xe-more con internal ctx)
```
