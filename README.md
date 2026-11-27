# Portfolio - Aaron Wuler

Mi pagina personal: moda, ecommerce y software.

Esta hecha con **Next.js** y **TypeScript**. Se exporta como sitio estatico (todo queda
en html, css y js en la carpeta `out/`), asi que se puede subir a cualquier lado.

**Pagina publicada:** (poner el link de vercel cuando este)

## Como correrlo

Hace falta Node 20 o mas nuevo.

```bash
npm install
npm run dev
```

Despues entrar a http://localhost:3000.

Para generar la version final:

```bash
npm run build
```

Queda en `out/` y se puede ver con `npm start`.

## Deploy en Vercel

Esta subida a Vercel conectada con este repo de GitHub, asi que cada push a `main`
se publica solo. Los pasos para conectarla la primera vez:

1. Entrar a https://vercel.com con la cuenta de GitHub.
2. **Add New... > Project** y elegir el repo `Porfolio-Aaron-Wuler`.
3. Vercel detecta que es Next.js solo (igual lo deje puesto en `vercel.json`).
   No hay que cambiar nada de la config, ni el build command ni la carpeta de salida.
4. **Deploy**.

Las otras ramas y los pull requests tambien se suben, pero con un link de prueba
aparte (no tocan la pagina principal).

Por que el `next.config.ts` tiene `output: 'export'` y `images.unoptimized`: es para que
el build sea estatico. Sin eso Next necesita un servidor para optimizar las imagenes.

## Estructura de archivos

```
public/
  fotos/              -> mi foto, el logo de imar y capturas de raw
src/
  app/
    layout.tsx        -> el html base, nav y footer
    page.tsx          -> la home, junta todas las secciones
    globals.css       -> todos los estilos
    fuentes.ts        -> las fuentes (archivo y jetbrains mono, en local)
    proyectos/
      raw-design/     -> la pagina del case study de raw
  components/         -> una seccion por archivo (Hero, Sobre, Proyectos, etc)
  fonts/
```

Los textos estan escritos directo en cada componente. Lo que todavia falta
completar tiene la clase `falta` (se ve en gris y en italica).

## Fotos

- Capturas de RAW Design: sacadas de la app.
- Foto del proyecto de ecommerce: [Diego Torres Silvestre](https://commons.wikimedia.org/wiki/File:Clothes..._(58987235).jpg), CC BY 2.0.

## Pendiente

- [ ] Link directo de LinkedIn
- [ ] Completar resultados de Llavi y el estado de RAW
- [ ] Paginas de ecommerce y llavi
- [ ] Poner el link de vercel aca arriba
